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
router.get('/trials', (req,res) => {
  Trial.find({}).then((Data) => { // bring everything
    res.send(Data)
  }).catch((e) => {
      res.status(500).send() //server's problem
  })
})

router.get('/trials/:cond', (req,res) => {
  const condition = req.params.cond
  Trial.find({'condition.cond_name': condition}).then((trial) => {
      if(!trial) {
          return res.status(404).send()
      }
      res.send(trial)
  }).catch((e) => {
      res.status(500).send()
  })
})


router.get('/trials/:country', (req,res) => {
  const country = req.params.country
  Trial.find({'country.country': country}).then((trial) => {
      if(!trial) {
          return res.status(404).send()
      }
      res.send(trial)
  }).catch((e) => {
      res.status(500).send()
  })
})


router.get('/trials/search', (req,res) => {
  Trial.find({'country.country':"United States"} , {'condition.cond_name': "Cancer"} ).then((trial) => {
      if(!trial) {
          return res.status(404).send()
      }
      res.send(trial)
  }).catch((e) => {
      res.status(500).send()
  })
})
module.exports = router;