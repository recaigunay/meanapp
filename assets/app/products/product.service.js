import { Component, Injectable, EventEmitter } from "@angular/core";
import { Category } from "./category.model";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";
import { hostname } from "os";
import { Product } from "./product.model";
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
                transformedMessages.push(new Category(category._id, category.CategoryCode, category.CategoryName, category.CategoryImageUrl, category.CategoryDesc, category.CategoryCommentCount, category.CategoryLikeCount));
            }
            _this.categories = transformedMessages;
            return transformedMessages;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    ProductService.prototype.getProducts = function (id) {
        var _this = this;
        return this.http.get(this.serverUrl + '/category/' + id).map(function (response) {
            var products = response.json().obj;
            var transformedMessages = [];
            for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
                var product = products_1[_i];
                if (product.ProductImageUrl == "") {
                    product.ProductImageUrl = "/images/noimage.png";
                }
                ;
                transformedMessages.push(product);
            }
            _this.products = transformedMessages;
            return transformedMessages;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    ProductService.prototype.getProductDetail = function (id) {
        var _this = this;
        var transformedMessages = [];
        // if (this.products.length > 0) {
        //     transformedMessages = this.products.filter(function (el) {
        //         return (el._id === id);
        //     });
        //     return transformedMessages;
        // } else {
        return this.http.get(this.serverUrl + '/product/' + id).map(function (response) {
            var product = response.json().obj;
            if (product.ProductImageUrl == "") {
                product.ProductImageUrl = "/images/noimage.png";
            }
            ;
            if (product != null && product != undefined) {
                transformedMessages.push(product);
            }
            return transformedMessages;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
        //}
    };
    return ProductService;
}());
export { ProductService };
