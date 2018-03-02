export class Category  {
    _id:string;
    CategoryCode:string;
    CategoryName:string;
    CategoryImageUrl?:string;
    CategoryDesc?:string;
    CategoryCommentCount?:number;
    CategoryLikeCount?:number;

    constructor(_id:string, CategoryCode:string, CategoryName: string, CategoryImageUrl?:string, CategoryDesc?:string, CategoryCommentCount?:number, CategoryLikeCount?:number) {
       this._id=_id;
        this.CategoryCode=CategoryCode;
        this.CategoryName = CategoryName;
        this.CategoryImageUrl=CategoryImageUrl;
        this.CategoryDesc=CategoryDesc;
        this.CategoryLikeCount=CategoryLikeCount;
        this.CategoryCommentCount=CategoryCommentCount;
    }
}