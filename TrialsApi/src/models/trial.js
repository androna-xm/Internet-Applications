//Connect to db 
const mongoose = require('mongoose'); //bring the mongoose package to our file 
//const Schema = mongoose.Schema;

//Create a model of how your collection should look like in order to read documents from the underlying MongoDb database 
const Trial = mongoose.model('Trial', {
  nct_id: {
    type: String
  },
  study_first_submitted: {
    type: String,
    required: true
  },
  last_update_submitted: {
    type: String,
    required: true
  }
},
'ClinicalTrialData')
//create a model that follows this schema. Model's name is 'Trials'

module.exports = Trial