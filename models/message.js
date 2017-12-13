var mongoose = require("mongoose");

var User = require('./user');
var schema = new mongoose.Schema({
    content : {type:String , required:true},
    user : {type : mongoose.Schema.Types.ObjectId, ref: 'User'}
})

schema.post('remove', function(message) {
    User.findById(message.user, function(err, user) {
        if ( err) {
            return res.status(500).json({
                title : 'an error occured user not found',
                error:err
            })
        }

        user.messages.pull(message);
        user.save();
    })
})
module.exports = mongoose.model("Message", schema);