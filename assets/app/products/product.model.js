import { ProductProperty } from "./product-property.model";
var Product = /** @class */ (function () {
    function Product(_id, CategoryCode, ProductCode, ProductName, ProductProperty, ProductImageUrl, ProductPrice, ProductCurrencyCode, ProductContent, ProductCommentCount, ProductLikeCount, ProductProperties) {
        this._id = _id;
        this.CategoryCode = CategoryCode;
        this.ProductCode = ProductCode;
        this.ProductName = ProductName;
        this.ProductProperty = ProductProperty;
        this.ProductImageUrl = ProductImageUrl;
        this.ProductPrice = ProductPrice;
        this.ProductCurrencyCode = ProductCurrencyCode;
        this.ProductContent = ProductContent;
        this.ProductCommentCount = ProductCommentCount;
        this.ProductLikeCount = ProductLikeCount;
        this.ProductProperties = ProductProperties;
    }
    return Product;
}());
export { Product };
