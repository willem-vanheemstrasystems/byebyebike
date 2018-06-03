var Bicycle = require('../models/bicycle');
var Cyclist = require('../models/cyclist');
var Brand = require('../models/brand');
var BicycleInstance = require('../models/bicycleinstance');

var async = require('async');

/**
exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};
*/

exports.index = function(req, res) {   
    
    async.parallel({
        bicycle_count: function(callback) {
            Bicycle.count({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        bicycle_instance_count: function(callback) {
            BicycleInstance.count({}, callback);
        },
        bicycle_instance_available_count: function(callback) {
            BicycleInstance.count({status:'Unknown'}, callback);
        },
        cyclist_count: function(callback) {
            Cyclist.count({}, callback);
        },
        brand_count: function(callback) {
            Brand.count({}, callback);
        },
    }, function(err, results) {
        res.render('index', { title: 'Bye Bye Bicycle Home', error: err, data: results });
    });
};


// Display list of all bicycles.
/**
exports.bicycle_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Bicycle list');
};
*/
// Display list of all Books.
exports.bicycle_list = function(req, res, next) {

    Bicycle.find({}, 'registration_number cyclist')
      .populate('cyclist')
      .exec(function (err, list_bicycles) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('bicycle_list', { title: 'Bicycle List', bicycle_list: list_bicycles });
      });
      
  };

// Display detail page for a specific bicycle.
/**
exports.bicycle_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Bicycle detail: ' + req.params.id);
};
*/
// Display detail page for a specific book.
exports.bicycle_detail = function(req, res, next) {

    async.parallel({
        bicycle: function(callback) {

            Bicycle.findById(req.params.id)
              .populate('cyclist')
              .populate('brand')
              .exec(callback);
        },
        bicycle_instance: function(callback) {

          BicycleInstance.find({ 'bicycle': req.params.id })
          .exec(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.bicycle==null) { // No results.
            var err = new Error('Bicycle not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('bicycle_detail', { registration_number: 'Registration Number', bicycle:  results.bicycle, bicycle_instances: results.bicycle_instance } );
    });

};

// Display bicycle create form on GET.
exports.bicycle_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Bicycle create GET');
};

// Handle bicycle create on POST.
exports.bicycle_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Bicycle create POST');
};

// Display bicycle delete form on GET.
exports.bicycle_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Bicycle delete GET');
};

// Handle bicycle delete on POST.
exports.bicycle_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Bicycle delete POST');
};

// Display bicycle update form on GET.
exports.bicycle_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Bicycle update GET');
};

// Handle bicycle update on POST.
exports.bicycle_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Bicycle update POST');
};