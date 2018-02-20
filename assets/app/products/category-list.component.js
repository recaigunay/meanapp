import { Component, OnInit } from "@angular/core";
import { Category } from "./category.model";
import { ProductService } from "./product.service";
var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(productService) {
        this.productService = productService;
    }
    CategoryListComponent.prototype.onEditClicked = function (msg, data) {
        //msg.content=data;
    };
    CategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getCategories().subscribe(function (categories) {
            _this.categories = categories;
        });
    };
    return CategoryListComponent;
}());
export { CategoryListComponent };
