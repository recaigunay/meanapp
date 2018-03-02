var Category = /** @class */ (function () {
    function Category(_id, CategoryCode, CategoryName, CategoryImageUrl, CategoryDesc, CategoryCommentCount, CategoryLikeCount) {
        this._id = _id;
        this.CategoryCode = CategoryCode;
        this.CategoryName = CategoryName;
        this.CategoryImageUrl = CategoryImageUrl;
        this.CategoryDesc = CategoryDesc;
        this.CategoryLikeCount = CategoryLikeCount;
        this.CategoryCommentCount = CategoryCommentCount;
    }
    return Category;
}());
export { Category };
