var Brand = require('../models/brand');
var Bicycle = require('../models/bicycle');
var async = require('async');

// Display list of all Brand.
exports.brand_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Brand list');
};

// Display detail page for a specific Brand.
/**
exports.brand_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Brand detail: ' + req.params.id);
};
*/
// Display detail page for a specific Genre.
exports.brand_detail = function(req, res, next) {

    async.parallel({
        brand: function(callback) {
            Brand.findById(req.params.id)
              .exec(callback);
        },

        brand_bicycles: function(callback) {
          Bicycle.find({ 'brand': req.params.id })
          .exec(callback);
        },

    }, function(err, results) {
        if (err) { return next(err); }
        if (results.genre==null) { // No results.
            var err = new Error('Brand not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.render('brand_detail', { title: 'Brand Detail', brand: results.brand, brand_bicycles: results.brand_bicycles } );
    });

};

// Display Brand create form on GET.
exports.brand_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Brand create GET');
};

// Handle Brand create on POST.
exports.brand_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Brand create POST');
};

// Display Brand delete form on GET.
exports.brand_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Brand delete GET');
};

// Handle Brand delete on POST.
exports.brand_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Brand delete POST');
};

// Display Brand update form on GET.
exports.brand_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Brand update GET');
};

// Handle Brand update on POST.
exports.brand_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Brand update POST');
};