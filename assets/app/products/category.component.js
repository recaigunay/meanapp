import { Component, Input } from "@angular/core";
import { Category } from "./category.model";
import { ProductService } from "./product.service";
var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(productService) {
        this.productService = productService;
    }
    CategoryComponent.prototype.onEdit = function () {
        alert("merhaba");
        //this.productService.editMessage(this.category)
    };
    return CategoryComponent;
}());
export { CategoryComponent };
