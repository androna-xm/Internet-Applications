const express = require('express')
require('./db/mongoose')
const Trial = require('./models/trial')
const trialRouter = require('./routers/trial')


const app = express()
const port = process.env.PORT || 3001

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json()) //parse incomming json to an object  to easily use it and access request handlers
app.use(trialRouter)   //register the router with our app 

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})
