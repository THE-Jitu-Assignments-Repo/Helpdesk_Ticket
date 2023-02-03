const validator = require('validator')
const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        required: [true, "Please provide the email"],
        unique: true,
        validate: [validator.isEmail, 'invalid email']
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        min: 8
    }, 
    // incase of any admin
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    timestamps: true,
})


module.exports= mongoose.model('User', userSchema)