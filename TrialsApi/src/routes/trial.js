const express = require('express');
const Trial = require('../models/trial')
const { request } = require('express')
const router = new express.Router()



router.get('/ClinicalTrialData',async (req,res) =>{
  try{
    const trials = await Trial.find();
    res.json(trials);
  } 
  catch(err){
    res.json({message:err});
  }
});
module.exports = router;