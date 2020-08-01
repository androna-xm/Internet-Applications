const express = require('express')
require('./db/mongoose')
const Trial = require('./models/trial')
//const trialRouter = require('./routers/trial')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) //parse incomming json to an object  to easily use it and access request handlers
//app.use(userRouter)

//creating a route: when we receive an http request post , we handle it 
//with the post we are sending JSON type data to the express server
app.get('/ClinicalTrialData', (req,res) => {
  Trial.find({}).then((Data) => { // bring everything
    res.send(Data)
  }).catch((e) => {
      res.status(500).send() //server's problem
  })
})
app.post('/test',(req,res) => {
  const user = new Trial(req.body)
  user.save().then( () => {
      res.send(user)
  }).catch((e) => {
      res.status(400).send(e)
  })
})

const router = new express.Router()
router.get('/test', (req,res) => {
    res.send('This is a router')
})
app.use(router)

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

//console.log('ClinicalTrials RESTful API server started on: ' + port);