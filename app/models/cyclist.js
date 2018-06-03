var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CyclistSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date}
  }
);

// Virtual for cyclist's full name
CyclistSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for cyclist's URL
CyclistSchema
.virtual('url')
.get(function () {
  return '/catalog/cyclist/' + this._id;
});

//Export model
module.exports = mongoose.model('Cyclist', CyclistSchema);