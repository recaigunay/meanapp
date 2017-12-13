
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Message = require('../models/message');

router.get('/', function(req, res, next) {
Message.find().populate('user','firstName').exec(function(error, result) {
    if ( error) {
        return res.status(500).json({
            title : 'an error occured',
            error:error
        })
    }
    res.status(200).json({
        message : 'Success',
        obj:result
    })
})
})


router.use('/', function(req, res, next){
    jwt.verify(req.query.token, 'secret',function(err, decoded) {
        if ( err) {
            return res.status(401).json({
                title : 'not authenticated',
                error : err
            })
        }
        next();
   })
})

router.post('/',function(req,res,next) {  
 var decoded = jwt.decode(req.query.token);
 User.findById(decoded.user._id, function (err, user) {    
    if ( err) {
        return res.status(500).json({
            title : 'an error occured while finding the user',
            error:err
        })
    }   
    var message = new Message({
        content : req.body.content,
        user : user
    }) 
    message.save(function(err,result) {
      if ( err) {
          return res.status(500).json({
            title : 'an error occured while saving the message',
            error:err
          })
      }     
      user.messages.push(result.toObject());
      user.save();
      
       res.status(201).json({
        message : 'message saved',
        obj : result
       })
    })

 })

});

router.patch('/:id', function(req,res,next){
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function(err, message) {
        if ( err) {
            return res.status(500).json({
                title : 'an error occured while finding the message',
                error:err
            })
        }
        if ( !message) {
            return res.status(500).json({
                title : 'no message found',
                error: {message : 'message not found'}
            })
        }

        if ( message.user !=decoded.user._id) {
            return res.status(401).json({
                title : 'not authenticated',
                error : {message:'users do not match'}
            })
        }

        message.content=req.body.content;
        message.save(function(err, result) {
            if ( err) {
                return res.status(500).json({
                    title : 'an error occured',
                    error:err
                })
            }
            res.status(201).json({
                message : 'updated message',
                obj : result
            })
        })
    })
})

router.delete('/:id', function(req,res,next){
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function(err, message) {
        if ( err) {
            return res.status(500).json({
                title : 'an error occured',
                error:err
            })
        }        
        if ( !message) {
            return res.status(500).json({
                title : 'no message found',
                error: {message : 'message not found'}
            })
        }       
        if ( message.user !=decoded.user._id) {
            return res.status(401).json({
                title : 'not authenticated',
                error : {message:'users do not match'}
            })
        }
        message.remove(function(err, result) {
            if ( err) {
                return res.status(500).json({
                    title : 'an error occured',
                    error:err
                })
            }
            res.status(201).json({
                message : 'deleted message',
                obj : result
            })
        })
    })
})

module.exports =router;