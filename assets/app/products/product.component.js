import { Component, Input } from "@angular/core";
import { Product } from "./product.model";
import { ProductService } from "./product.service";
var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService) {
        this.productService = productService;
    }
    ProductComponent.prototype.onEdit = function () {
        alert("tıklandı");
        //this.productService.editMessage(this.category)
    };
    return ProductComponent;
}());
export { ProductComponent };
