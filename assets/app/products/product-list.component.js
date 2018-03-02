import { Component, OnInit, OnDestroy } from "@angular/core";
import { Product } from "./product.model";
import { ProductService } from "./product.service";
import { Router, ActivatedRoute } from "@angular/router";
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, _route) {
        this.productService = productService;
        this._route = _route;
    }
    ProductListComponent.prototype.onEditClicked = function (msg, data) {
        //msg.content=data;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            _this.id = params['id'].toString();
            _this.productService.getProducts(_this.id.toString()).subscribe(function (products) {
                _this.products = products;
            });
        });
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ProductListComponent;
}());
export { ProductListComponent };
