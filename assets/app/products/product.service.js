import { Component, Injectable, EventEmitter } from "@angular/core";
import { Category } from "./category.model";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";
var ProductService = /** @class */ (function () {
    function ProductService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
    }
    ProductService.prototype.getCategories = function () {
        var _this = this;
        return this.http.get(this.serverUrl + '/category').map(function (response) {
            var categories = response.json().obj;
            var transformedMessages = [];
            for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
                var category = categories_1[_i];
                //console.log(message.content);
                transformedMessages.push(new Category(category.CategoryCode, category.CategoryName, category.CategoryImageUrl, category.CategoryDesc, category.CategoryCommentCount, category.CategoryLikeCount));
            }
            _this.categories = transformedMessages;
            return transformedMessages;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    return ProductService;
}());
export { ProductService };
