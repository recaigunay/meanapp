import { Component, Input } from "@angular/core";
import { Product } from "./product.model";
import { ProductService } from "./product.service";
import { Router } from "@angular/router";
var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService, _router) {
        this.productService = productService;
        this._router = _router;
    }
    ProductComponent.prototype.navigateProductDetail = function (id) {
        this._router.navigate(['/products', id]);
    };
    return ProductComponent;
}());
export { ProductComponent };
