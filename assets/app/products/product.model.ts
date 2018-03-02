import {ProductProperty} from "./product-property.model";

export class Product {
    _id:string;
    CategoryCode: string;
    ProductCode: string;
    ProductName: string;
    ProductProperty: string;
    ProductImageUrl?: string;
    ProductPrice: number;
    ProductCurrencyCode: string;
    ProductContent?: string;
    ProductCommentCount?: number;
    ProductLikeCount?: number;
    ProductProperties:ProductProperty[];

    constructor(_id:string, CategoryCode: string, ProductCode: string, ProductName: string, ProductProperty: string, ProductImageUrl: string, ProductPrice: number, ProductCurrencyCode: string, ProductContent: string, ProductCommentCount: number, ProductLikeCount: number,ProductProperties:ProductProperty[]) {
        
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
        this.ProductProperties=ProductProperties;
    }
}