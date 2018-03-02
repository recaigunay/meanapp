import { Component, Injectable, EventEmitter } from "@angular/core";
import { Category } from "./category.model";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";
import { hostname } from "os";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
    private categories: Category[] = [];
    private products: Product[] = [];

    hostname: string = window.location.hostname;
    prot: string = window.location.protocol;
    index: number = -1;
    serverUrl: string = "";

    messageIsEdit = new EventEmitter<Category>();

    constructor(private http: Http, private errorService: ErrorService) {
        this.getUrl(this.hostname, this.prot);
    }

    getUrl(hostname: string, prot: string) {
        this.index = hostname.toString().toUpperCase().indexOf('HEROKU');
        if (this.index >= 0) {
            this.serverUrl = "https://meanapp-messenger.herokuapp.com";
        } else this.serverUrl = "http://127.0.0.1:3000";
    }

    getCategories() {
        return this.http.get(this.serverUrl + '/category').map(
            (response: Response) => {
                const categories = response.json().obj;
                let transformedMessages: Category[] = [];
                for (let category of categories) {
                    if ( category.CategoryImageUrl=="") {
                        category.CategoryImageUrl="/images/noimage.png";
                    }
                    transformedMessages.push(new Category(category._id, category.CategoryCode, category.CategoryName, category.CategoryImageUrl, category.CategoryDesc, category.CategoryCommentCount, category.CategoryLikeCount));
                }
                this.categories = transformedMessages;
                return transformedMessages;
            })
            .catch(
                (error: Response) => {
                    this.errorService.handleError(error.json());
                    return Observable.throw(error.json())
                }
            )
    }

    getProducts(id:string) {
        return this.http.get(this.serverUrl + '/category/'+id).map(
            (response: Response) => {
                const products = response.json().obj;
                let transformedMessages: Product[] = [];
                for (let product of products) {
                    if ( product.ProductImageUrl=="") {
                        product.ProductImageUrl="/images/noimage.png";
                    };
                   
                    transformedMessages.push(product);
                }
                this.products = transformedMessages;
                return transformedMessages;
            })
            .catch(
                (error: Response) => {
                    this.errorService.handleError(error.json());
                    return Observable.throw(error.json())
                }
            )
    }


}