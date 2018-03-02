var mongoose = require("mongoose");

var schema = new mongoose.Schema({
    CategoryCode : {type:String , required:true},
    ProductCode: {type: String, required:true},
    ProductName: {type: String, required:true},
    ProductProperty : {type:String},
    ProductImageUrl : {type:String},
    ProductPrice : {type:Number},
    ProductCurrencyCode : {type:String},
    ProductContent : {type:String},
    ProductCommentCount : {type:Number},
    ProductLikeCount: {type:Number},
    ProductProperties:[{
        productPropertyCode: {type:String},
        typeCode: {type:String},
        typeName: {type:String},
        name: {type:String},
        price: {type:Number},
        priceCurrencyCode: {type:String},
        defaultValue: {type:Boolean}
    }]
})


module.exports = mongoose.model("Product", schema);