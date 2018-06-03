var express = require('express');
var router = express.Router();

// Require controller modules.
var bicycle_controller = require('../controllers/bicycleController');
var cyclist_controller = require('../controllers/cyclistController');
var brand_controller = require('../controllers/brandController');
var bicycle_instance_controller = require('../controllers/bicycleinstanceController');

/// BICYCLE ROUTES ///

// GET catalog home page.
router.get('/', bicycle_controller.index);

// GET request for creating a Bicycle. NOTE This must come before routes that display Bicycle (uses id).
router.get('/bicycle/create', bicycle_controller.bicycle_create_get);

// POST request for creating Bicycle.
router.post('/bicycle/create', bicycle_controller.bicycle_create_post);

// GET request to delete Bicycle.
router.get('/bicycle/:id/delete', bicycle_controller.bicycle_delete_get);

// POST request to delete Bicycle.
router.post('/bicycle/:id/delete', bicycle_controller.bicycle_delete_post);

// GET request to update Bicycle.
router.get('/bicycle/:id/update', bicycle_controller.bicycle_update_get);

// POST request to update Bicycle.
router.post('/bicycle/:id/update', bicycle_controller.bicycle_update_post);

// GET request for one Bicycle.
router.get('/bicycle/:id', bicycle_controller.bicycle_detail);

// GET request for list of all Bicycle items.
router.get('/bicycles', bicycle_controller.bicycle_list);

/// CYCLIST ROUTES ///

// GET request for creating Cyclist. NOTE This must come before route for id (i.e. display cyclist).
router.get('/cyclist/create', cyclist_controller.cyclist_create_get);

// POST request for creating Cyclist.
router.post('/cyclist/create', cyclist_controller.cyclist_create_post);

// GET request to delete Cyclist.
router.get('/cyclist/:id/delete', cyclist_controller.cyclist_delete_get);

// POST request to delete Cyclist.
router.post('/cyclist/:id/delete', cyclist_controller.cyclist_delete_post);

// GET request to update Cyclist.
router.get('/cyclist/:id/update', cyclist_controller.cyclist_update_get);

// POST request to update Cyclist.
router.post('/cyclist/:id/update', cyclist_controller.cyclist_update_post);

// GET request for one Cyclist.
router.get('/cyclist/:id', cyclist_controller.cyclist_detail);

// GET request for list of all Cyclists.
router.get('/cyclists', cyclist_controller.cyclist_list);

/// BRAND ROUTES ///

// GET request for creating a Brand. NOTE This must come before route that displays Brand (uses id).
router.get('/brand/create', brand_controller.brand_create_get);

//POST request for creating Brand.
router.post('/brand/create', brand_controller.brand_create_post);

// GET request to delete Brand.
router.get('/brand/:id/delete', brand_controller.brand_delete_get);

// POST request to delete Brand.
router.post('/brand/:id/delete', brand_controller.brand_delete_post);

// GET request to update Brand.
router.get('/brand/:id/update', brand_controller.brand_update_get);

// POST request to update Brand.
router.post('/brand/:id/update', brand_controller.brand_update_post);

// GET request for one Brand.
router.get('/brand/:id', brand_controller.brand_detail);

// GET request for list of all Brand.
router.get('/brands', brand_controller.brand_list);

/// BICYCLEINSTANCE ROUTES ///

// GET request for creating a BicycleInstance. NOTE This must come before route that displays BicycleInstance (uses id).
router.get('/bicycleinstance/create', bicycle_instance_controller.bicycleinstance_create_get);

// POST request for creating BicycleInstance. 
router.post('/bicycleinstance/create', bicycle_instance_controller.bicycleinstance_create_post);

// GET request to delete BicycleInstance.
router.get('/bicycleinstance/:id/delete', bicycle_instance_controller.bicycleinstance_delete_get);

// POST request to delete BicycleInstance.
router.post('/bicycleinstance/:id/delete', bicycle_instance_controller.bicycleinstance_delete_post);

// GET request to update BicycleInstance.
router.get('/bicycleinstance/:id/update', bicycle_instance_controller.bicycleinstance_update_get);

// POST request to update BicycleInstance.
router.post('/bicycleinstance/:id/update', bicycle_instance_controller.bicycleinstance_update_post);

// GET request for one BicycleInstance.
router.get('/bicycleinstance/:id', bicycle_instance_controller.bicycleinstance_detail);

// GET request for list of all BicycleInstance.
router.get('/bicycleinstances', bicycle_instance_controller.bicycleinstance_list);

module.exports = router;