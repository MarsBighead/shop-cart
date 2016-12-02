var express = require('express');
var router = express.Router();
var shop = require('../lib/shop');

/* GET home page. */
router.get('/', function(req, res, next) {
    shop.showProducts(req, res, next)
});

router.get('/shop', function(req, res, next) {
    shop.showProducts(req, res, next)
});

module.exports = router;
