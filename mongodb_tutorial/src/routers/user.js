const express = require('express')
const User = require('../models/user')
const { request } = require('express')
const router = new express.Router()
router.get('/test', (req,res) => {
    res.send('This is a router froma new fie')
})

router.post('/users/login', async (req,res) => {
    try {
        const user = await User.findbyCredentials(request.body.email, request.body,password)
    } catch (e) {
        
    }
})

module.exports = router