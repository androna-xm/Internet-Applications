/*
'use strict';
module.exports = function(app) { //this file has been exported as a function and we can access it by require('the-path-to-TrialsRoutes.js')
  var trials = require('../controllers/TrialsController'); //call the controller from its file 

  // trials Routes
  app.route('/trials')
    .get(trials.list_all_trials)  
};
*/
const express = require('express');
const router = express.Router();
const Trial = require('../models/TrialsModel');
router.get('/',async (req,res) =>{
  try{
    const trials = await Trial.find();
    res.json(trials);
  } 
  catch(err){
    res.json({message:err});
  }
});
module.exports = router;