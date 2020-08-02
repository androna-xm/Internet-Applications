//Connect to db 
const mongoose = require('mongoose'); //bring the mongoose package to our file 
//Create a model of how your collection should look like in order to read documents from the underlying MongoDb database 
//to use middleware create Schema (model) 
const trialSchema = new  mongoose.Schema({
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
})


/*
//create a new function findbyParams
trialSchema.statics.findbyParams = async (country,condition) => {
  const trial = await Trial.find({'country.country': country} , {'condition.cond_name': condition})
  //const trial = await Trial.find({country : { $elemMatch : { country: country}}, condition : { $elemMatch : { cond_name :condition }}})
  if(!trial) {
    throw new Error('No clinical trials found!')
  }
  return trial
}
*/

const Trial = mongoose.model('Trial', trialSchema,'ClinicalTrialData')
//create a model that follows this schema. Model's name is 'Trial'

module.exports = Trial