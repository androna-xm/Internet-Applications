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

router.get('/trials/condition/:cond', async (req,res) => {
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


router.get('/trials/country/:country', async (req,res) => {
  console.log(req.get("origin"))
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

//endpoint to seach trials by country and condition
router.get('/trials/test', async (req,res) => {
  try {
    console.log(req.get("origin"))
    const trial = await Trial.find({'country.country': 'United States', 'condition.cond_name': "Cancer"})
    if(!trial) {
      return res.status(404).send()
    }
    res.send(trial)
  } catch (e) {
    res.status(500).send()
  }
})


// Model.find() returns an instance of the Query class.
//URL: localhost:3001/trials/search/United States/Cancer
router.get('/trials/search/:country/:condition', async (req,res) => {
  const country = req.params.country
  const condition = req.params.condition
  try {
    const trial = await Trial.find({'country.country': country , 'condition.cond_name': condition},'enrollment  study_first_submitted last_update_submitted -_id')
    if(!trial) {
      return res.status(404).send()
    }
    let enrollmentSum = 0, meanTime = 0
    //console.log(trial.length)
    for (var i of trial){
      if(i.enrollment){
        enrollmentSum += i.enrollment
      }
      const start = new Date(i.study_first_submitted)
      const end = new Date(i.last_update_submitted)
      const diffTime = end - start
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      //console.log(diffDays + " days")
      meanTime += diffDays
      //console.log(i.enrollment)        
    }
    //console.log(enrollmentSum)
    //const trial = await Trial.find({'country.country': req.query.country , 'condition.cond_name': req.query.condition},'enrollment  study_first_submitted last_update_submitted -_id')
    //res.send(trial)
    meanTime = meanTime / trial.length //in days
    res.send({'EnrollSum':enrollmentSum ,'MeanTime': meanTime }) //send response(return json data) using express
  } catch (e) {
    res.status(500).send()
  }
})

module.exports = router;