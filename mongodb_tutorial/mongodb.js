//JUST A TUTORIAL , WE WONT USE IT, instead we are using mongoose.js
//CRUD operations = create read update delete in my database 

//import the module  mongodb (library) that helps for the communication w/ db

const mongodb = require('mongodb') //returns an object
const MongoClient = mongodb.MongoClient //we need the function MongoClient of the object to perform CRUD operations

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager' 

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error,client) => {
    if(error){
        return console.log('Unable to connect to database')
    }
    //there was no error , it connected to the db
    //console.log('Connected to database correctly!')
    
    // db = reference to our db
    const db = client.db(databaseName)//arg = the name of db , created or not 
                                        
    
    /*
    db.collection('users').insertOne({
        name: 'Christina',
        age: 21
    }, (error,result) => {
        if(error) {
            return console.log('Unable to insert to db ')
        }

        console.log(result.ops)
    })
    */
   db.collection('users').find({name: 'Christina' , age: 21}).toArray((error,user) => {
    if(error) {
        return console.log('Unable to fetch ')
    }
    console.log(user)
   } )


   db.collection('users').find({name: 'Christina' , age: 21}).count((error,count) => {
    if(error) {
        return console.log('Unable to fetch ')
    }
    console.log(count)
   } )
})