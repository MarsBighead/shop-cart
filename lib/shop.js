var Product = require('../models/product');

/* Show all products. */
var showProducts = function (req, res, next){
    //console.log(req);
    Product.find(function (err, docs){
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i+= chunkSize){
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        //console.log(productChunks);
        res.render('shop.htm', {title: 'Shop Cart', products: productChunks});
    });
};

module.exports = {
    'showProducts':showProducts
};
