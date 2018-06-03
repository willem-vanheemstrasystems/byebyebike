#! /usr/bin/env node

console.log('This script populates some test bicycles, cyclists, brands and bicycleinstances to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Bicycle = require('./models/bicycle')
var Cyclist = require('./models/cyclist')
var Brand = require('./models/brand')
var BicycleInstance = require('./models/bicycleinstance')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var cyclists = []
var brands = []
var bicycles = []
var bicycleinstances = []

function cyclistCreate(first_name, family_name, d_birth, cb) {
  cyclistdetail = {first_name:first_name , family_name: family_name }
  if (d_birth != false) cyclistdetail.date_of_birth = d_birth
  
  var cyclist = new Cyclist(cyclistdetail);
       
  cyclist.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Cyclist: ' + cyclist);
    cyclists.push(cyclist)
    cb(null, cyclist)
  }  );
}

function brandCreate(name, cb) {
  var brand = new Brand({ name: name });
       
  brand.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Brand: ' + brand);
    brands.push(brand)
    cb(null, brand);
  }   );
}

function bicycleCreate(registration_number, cyclist, brand, cb) {
  bicycledetail = { 
    cyclist: cyclist,
    registration_number: registration_number
  }
  if (brand != false) bicycledetail.brand = brand
    
  var bicycle = new Bicycle(bicycledetail);    
  bicycle.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Bicycle: ' + bicycle);
    bicycles.push(bicycle)
    cb(null, bicycle)
  }  );
}


function bicycleInstanceCreate(bicycle, reported_on, status, cb) {
  bicycleinstancedetail = { 
    bicycle: bicycle
  }    
  if (reported_on != false) bicycleinstancedetail.reported_on = reported_on
  if (status != false) bicycleinstancedetail.status = status
    
  var bicycleinstance = new BicycleInstance(bicycleinstancedetail);    
  bicycleinstance.save(function (err) {
    if (err) {
      console.log('ERROR CREATING BicycleInstance: ' + bicycleinstance);
      cb(err, null)
      return
    }
    console.log('New BicycleInstance: ' + bicycleinstance);
    bicycleinstances.push(bicycleinstance)
    cb(null, bicycle)
  }  );
}


function createBrandCyclists(cb) {
    async.parallel([
        function(callback) {
          cyclistCreate('Patrick', 'Rothfuss', '1973-06-06', callback);
        },
        function(callback) {
          cyclistCreate('Ben', 'Bova', '1932-11-8', callback);
        },
        function(callback) {
          cyclistCreate('Isaac', 'Asimov', '1920-01-02', callback);
        },
        function(callback) {
          cyclistCreate('Bob', 'Billings', false, callback);
        },
        function(callback) {
          cyclistCreate('Jim', 'Jones', '1971-12-16', callback);
        },
        function(callback) {
          brandCreate("Batavus", callback);
        },
        function(callback) {
          brandCreate("Gazelle", callback);
        },
        function(callback) {
          brandCreate("Kronan", callback);
        },
        ],
        // optional callback
        cb);
}


function createBicycles(cb) {
    async.parallel([
        function(callback) {
          bicycleCreate('9781473211896', cyclists[0], [brands[0],], callback);
        },
        function(callback) {
          bicycleCreate('9788401352836', cyclists[0], [brands[0],], callback);
        },
        function(callback) {
          bicycleCreate('9780756411336', cyclists[0], [brands[0],], callback);
        },
        function(callback) {
          bicycleCreate('9780765379528', cyclists[1], [brands[1],], callback);
        },
        function(callback) {
          bicycleCreate('9780765379504', cyclists[1], [brands[1],], callback);
        },
        function(callback) {
          bicycleCreate('111111', cyclists[4], [brands[0],brands[1]], callback);
        },
        function(callback) {
          bicycleCreate('222222', cyclists[4], false, callback)
        }
        ],
        // optional callback
        cb);
}


function createBicycleInstances(cb) {
    async.parallel([
        function(callback) {
          bicycleInstanceCreate(bicycles[0], false, 'Stolen', callback)
        },
        function(callback) {
          bicycleInstanceCreate(bicycles[1], false, 'Not Stolen', callback)
        },
        function(callback) {
          bicycleInstanceCreate(bicycles[2], false, false, callback)
        },
        function(callback) {
          bicycleInstanceCreate(bicycles[3], false, 'Other', callback)
        },
        function(callback) {
          bicycleInstanceCreate(bicycles[3], false, 'Unknown', callback)
        },
        function(callback) {
          bicycleInstanceCreate(bicycles[3], false, 'Unknown', callback)
        },
        function(callback) {
          bicycleInstanceCreate(bicycles[4], false, 'Unknown', callback)
        },
        function(callback) {
          bicycleInstanceCreate(bicycles[4], false, 'Unknown', callback)
        },
        function(callback) {
          bicycleInstanceCreate(bicycles[4], false, 'Not Stolen', callback)
        },
        function(callback) {
          bicycleInstanceCreate(bicycles[0], false, false, callback)
        },
        function(callback) {
          bicycleInstanceCreate(bicycles[1], false, false, callback)
        }
        ],
        // Optional callback
        cb);
}



async.series([
    createBrandCyclists,
    createBicycles,
    createBicycleInstances
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('BOOKInstances: '+bicycleinstances);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});




