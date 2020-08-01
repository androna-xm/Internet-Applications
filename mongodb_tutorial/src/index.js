const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) //parse incomming json to an object  to easily use it and access request handlers
app.use(userRouter)
//ROUTES 
/* put it in another file
const router = new express.Router()
router.get('/test', (req,res) => {
    res.send('This is a router')
})
app.use(router)
*/

//creating a route: when we receive an http request post , we handle it 
//with the post we are sending JSON type data to the express server
app.post('/users',(req,res) => {
    const user = new User(req.body)
    user.save().then( () => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/users', (req,res) => {
    User.find({}).then((users) => { // bring everything
        res.send(users)
    }).catch((e) => {
        res.status(500).send() //server's problem
    })
})

app.get('/users/:id', (req,res) => {
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) => {
        res.status(500).send()
    })
})
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

