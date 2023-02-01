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
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
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