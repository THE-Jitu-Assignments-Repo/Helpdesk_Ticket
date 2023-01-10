const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        required: [true, "Please provide the email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: true
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