const express = require('express');
const Trial = require('../models/trial')
const { request } = require('express')
const router = new express.Router()


/*
router.get('/ClinicalTrialData',async (req,res) =>{
  try{
    const trials = await Trial.find();
    res.json(trials);
  } 
  catch(err){
    res.json({message:err});
  }
})*/
router.get('/trials', async (req,res) => {
  try{
    const Data = await Trial.find({}) // bring everything
    res.send(Data)
  } catch (e) {
    res.status(500).send() //server's problem
  }
})

router.get('/trials/:cond', async (req,res) => {
  const condition = req.params.cond
  try {
    const trial = await Trial.find({'condition.cond_name': condition})
    if(!trial) {
      return res.status(404).send()
    }
    res.send(trial)
  } catch (e) {
    res.status(500).send()
  }
})


router.get('/trials/:country', async (req,res) => {
  const country = req.params.country
  try {
    const trial = await Trial.find({'country.country': country})
    if(!trial) {
      return res.status(404).send()
    }
    res.send(trial)
  } catch (e) {
    res.status(500).send()
  }
})

module.exports = router;