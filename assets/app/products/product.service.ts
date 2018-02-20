import { Component, Injectable, EventEmitter } from "@angular/core";
import { Category } from "./category.model";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class ProductService {
    private categories: Category[] = [];
    //serverUrl: string = "https://meanapp-messenger.herokuapp.com"; //"http://127.0.0.1:3000"; //
    serverUrl : string = "http://127.0.0.1:3000"; 
    messageIsEdit = new EventEmitter<Category>();

    constructor(private http: Http, private errorService:ErrorService) {

    }

    getCategories() {
        return this.http.get(this.serverUrl + '/category').map(
            (response: Response) => {
                const categories = response.json().obj;
                let transformedMessages: Category[] = [];
                for (let category of categories) {
                    //console.log(message.content);
                    transformedMessages.push(new Category(category.CategoryCode, category.CategoryName,category.CategoryImageUrl, category.CategoryDesc, category.CategoryCommentCount, category.CategoryLikeCount ));
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