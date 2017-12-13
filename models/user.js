var mongoose = require("mongoose");

var Message = require('./message');
var mongooseUniqueValidator = require("mongoose-unique-validator");
var schema = new mongoose.Schema({
    firstName : {type:String , required:true},
    lastName: {type: String, required:true},
    password : {type:String, required:true},
    email : {type : String, required:true, unique:true},
    messages : [{type : mongoose.Schema.Types.ObjectId, ref:'Message'}]
})

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model("User", schema);