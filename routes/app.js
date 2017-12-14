var express = require('express');
var router = express.Router();

router.get('/js/app/bundle.js', function(req, res){
    res.sendfile(__dirname + '/bundle.js');
  });
  
  router.get('/stylesheets/style.css', function(req, res){
    res.sendfile(__dirname + '/stylesheets/style.css');
  });

  
router.get('/', function (req, res, next) {
    res.render('index');    
});

module.exports = router;
