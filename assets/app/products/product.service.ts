import { Component, Injectable, EventEmitter } from "@angular/core";
import { Category } from "./category.model";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";
import { hostname } from "os";

@Injectable()
export class ProductService {
    private categories: Category[] = [];

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
                    transformedMessages.push(new Category(category.CategoryCode, category.CategoryName, category.CategoryImageUrl, category.CategoryDesc, category.CategoryCommentCount, category.CategoryLikeCount));
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


}