//Connect to db 
const mongoose = require('mongoose'); //bring the mongoose package to our file 
//const Schema = mongoose.Schema;

//Create a model of how your collection should look like in order to read documents from the underlying MongoDb database 
const Trial = mongoose.model('Trial', {
  country: {
      type: [
        {
          country: String
        }
      ]
  }
  ,
  condition: {
    type: [
      {
        cond_name: String
      }
    ]
  },
  study_first_submitted: {
    type: String
  },
  last_update_submitted: {
    type: String
  },
  enrollment: {
    type: Number
  }
},
'ClinicalTrialData')
//create a model that follows this schema. Model's name is 'Trials'

module.exports = Trial