'use strict';

var mongoose = require('mongoose'), // we will use mongoose to access our db
  Trial = mongoose.model('Trials'); // it will follow the model that we created in TrialsModel.js 
exports.list_all_trials = function(req, res) {
  Trial.find({}, function(err, trial) { //executes passing the result to the function 
    if (err)
      res.send(err);
    res.json(trial); //send the response in json format
  });
};