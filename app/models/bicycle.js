var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BicycleSchema = new Schema(
  {
    cyclist: {type: Schema.ObjectId, ref: 'Cyclist', required: true},
    registration_number: {type: String, required: true},
    brand: [{type: Schema.ObjectId, ref: 'Brand'}]
  }
);

// Virtual for bicycle's URL
BicycleSchema
.virtual('url')
.get(function () {
  return '/catalog/bicycle/' + this._id;
});

//Export model
module.exports = mongoose.model('Bicycle', BicycleSchema);