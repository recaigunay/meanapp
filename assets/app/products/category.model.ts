export class Category  {
    CategoryCode:string;
    CategoryName:string;
    CategoryImageUrl?:string;
    CategoryDesc?:string;
    CategoryCommentCount?:number;
    CategoryLikeCount?:number;

    constructor(CategoryCode:string, CategoryName: string, CategoryImageUrl?:string, CategoryDesc?:string, CategoryCommentCount?:number, CategoryLikeCount?:number) {
        this.CategoryCode=CategoryCode;
        this.CategoryName = CategoryName;
        this.CategoryImageUrl=CategoryImageUrl;
        this.CategoryDesc=CategoryDesc;
        this.CategoryLikeCount=CategoryLikeCount;
        this.CategoryCommentCount=CategoryCommentCount;
    }
}