
const mongoose = require('mongoose')
//const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true
    } ,

    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User',userSchema)

userSchema.statics.findByCredentials = async (email,password) => {
    const user = await User.findOne({ email })
    if(!user){
        throw new Error('Unable to login!')
    }

    const isMatch = await
}

module.exports = User 