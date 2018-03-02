
var express = require('express');
var router = express.Router();

var Category = require('../models/category');
var Product = require('../models/product');

router.get('/:id', function (req, res, next) {
    Category.findById(req.params.id).exec(function (error, result) {
        if (error) {
            return res.status(500).json({
                title: 'an error occured',
                error: error
            })
        }
        if (result.CategoryCode != "") {
            Product.find({ CategoryCode: result.CategoryCode }).sort({ ProductCode: 1 }).exec(function (error, productList) {
                if (error) {
                    return res.status(500).json({
                        title: 'an error occured',
                        error: error
                    })
                }
                res.status(200).json({
                    message: 'Success',
                    obj: productList
                })
            })
        }

    })
})


router.get('/', function (req, res, next) {
    Category.find().sort({ CategoryCode: 1 }).exec(function (error, result) {
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