
var express = require('express');
var router = express.Router();

var Product = require('../models/product');

router.get('/:id', function (req, res, next) {
    Product.findById(req.params.id).exec(function (error, result) {
        if (error) {
            return res.status(500).json({
                title: 'an error occured',
                error: error
            })
        }
        res.status(200).json({
            message: 'Success',
            obj: result
        })
    })
})


module.exports = router;