var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BicycleInstanceSchema = new Schema(
  {
    bicycle: { type: Schema.ObjectId, ref: 'Bicycle', required: true }, //reference to the associated bicycle
    status: {type: String, required: true, enum: ['Stolen', 'Not Stolen', 'Unknown', 'Other'], default: 'Unknown'},
    reported_on: {type: Date, default: Date.now}
  }
);

// Virtual for bicycleinstance's URL
BicycleInstanceSchema
.virtual('url')
.get(function () {
  return '/catalog/bicycleinstance/' + this._id;
});

//Export model
module.exports = mongoose.model('BicycleInstance', BicycleInstanceSchema);