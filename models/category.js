var mongoose = require("mongoose");

var schema = new mongoose.Schema({
    CategoryCode : {type:String , required:true},
    CategoryName: {type: String, required:true},
    CategoryImageUrl : {type:String},
    CategoryDesc : {type:String},
    CategoryCommentCount : {type:Number},
    CategoryLikeCount: {type:Number},
})


module.exports = mongoose.model("Category", schema);