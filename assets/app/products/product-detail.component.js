import { Component, Input, OnInit } from "@angular/core";
import { Product } from "./product.model";
import { ProductService } from "./product.service";
import { ActivatedRoute } from "@angular/router";
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(productService, _route) {
        this.productService = productService;
        this._route = _route;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            _this.id = params['id'].toString();
            _this.productService.getProductDetail(_this.id.toString()).subscribe(function (products) {
                if (products.length > 0) {
                    _this.product = products[0];
                }
            });
        });
    };
    return ProductDetailComponent;
}());
export { ProductDetailComponent };
