'use strict';
//Connect to db 
var mongoose = require('mongoose'); //bring the mongoose package to our file 
var Schema = mongoose.Schema;

//Create a model of how your collection should look like in order to read documents from the underlying MongoDb database 
var TrialSchema = new Schema({
  condition: {
    type: String,
    required: 'Please  enter the name of the condition'
  },
  country: {
    type: String,
    required: 'Please  enter the name of the country'
  }
});
//create a model that follows this schema. Model's name is 'Trials'
module.exports = mongoose.model('Trials', TrialSchema);