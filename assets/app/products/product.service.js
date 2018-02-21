import { Component, Injectable, EventEmitter } from "@angular/core";
import { Category } from "./category.model";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";
import { hostname } from "os";
var ProductService = /** @class */ (function () {
    function ProductService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.getUrl(this.hostname, this.prot);
    }
    ProductService.prototype.getUrl = function (hostname, prot) {
        this.index = hostname.toString().toUpperCase().indexOf('HEROKU');
        if (this.index >= 0) {
            this.serverUrl = "https://meanapp-messenger.herokuapp.com";
        }
        else
            this.serverUrl = "http://127.0.0.1:3000";
    };
    ProductService.prototype.getCategories = function () {
        var _this = this;
        return this.http.get(this.serverUrl + '/category').map(function (response) {
            var categories = response.json().obj;
            var transformedMessages = [];
            for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
                var category = categories_1[_i];
                if (category.CategoryImageUrl == "") {
                    category.CategoryImageUrl = "/images/noimage.png";
                }
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
