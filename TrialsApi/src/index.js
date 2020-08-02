const express = require('express')
require('./db/mongoose')
const Trial = require('./models/trial')
const trialRouter = require('./routers/trial')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) //parse incomming json to an object  to easily use it and access request handlers
app.use(trialRouter)   //register the router with our app 

//creating a route: when we receive an http request post , we handle it 
//with the post we are sending JSON type data to the express server
// routes are in trialRouter file 

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

//console.log('ClinicalTrials RESTful API server started on: ' + port);