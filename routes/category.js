
var express = require('express');
var router = express.Router();

var Category = require('../models/category');

router.get('/', function(req, res, next) {
Category.find().sort( { CategoryCode: 1 } ).exec(function(error, result) {
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




module.exports =router;