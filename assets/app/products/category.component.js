import { Component, Input } from "@angular/core";
import { Category } from "./category.model";
import { ProductService } from "./product.service";
import { Router } from "@angular/router";
var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(productService, _router) {
        this.productService = productService;
        this._router = _router;
    }
    CategoryComponent.prototype.navigateProducts = function (id) {
        this._router.navigate(['/categories', id]);
    };
    return CategoryComponent;
}());
export { CategoryComponent };
