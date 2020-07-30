var express = require('express'), //gets the package express into this file 
  app = express(), //execute express in variable "app" 
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Trial = require('./api/models/TrialsModel'), //load the created model
  bodyParser = require('body-parser'); // Parse incoming request bodies in a middleware before your handlers to convert it in json form


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ClinicalTrials_db', { useNewUrlParser: true , useUnifiedTopology: true },
                  () => console.log('connected to DB!')
); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // create middleware, make sure that this bodyparser runs

//importing route
var routes = require('./api/routes/TrialsRoutes'); 
//routes(app); //register the route
app.use('/trials',routes);
//start listening to the server in port 3000
app.listen(port);

console.log('ClinicalTrials RESTful API server started on: ' + port);