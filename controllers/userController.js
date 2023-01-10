const dotenv = require('dotenv').config()
const bcrypt = require('bcrypt')
const User = require('../models/userModel')

module.exports = {
    //@route /api/users
    registerUsers: async (req, res) => {
        try {
            const {
                username,
                email,
                password
            } = req.body
            // console.log(username, email, password);
            //@validation
            if (!username || !email || !password) {
                res.status(400)
                throw new Error('Please include all the empty fields')
            } else {


                // Find if the user exists
                const userExist = await User.findOne({
                    email,
                    password
                })

                if (userExist) {

                    res.status(400)
                    throw new Error('Invalid credentials')
                }

                // Hash password

                const hashedPassword = await bcrypt.hash(password, process.env.SALT)


                // Create user
                const user = await User.create({
                    username,
                    email,
                    password: hashedPassword
                })

                if (user) {
                    res.status(201).json({
                        _id: user._id,
                        name: user.username,
                        email: user.email,
                        message: "registered succefully"
                    })
                }else{
                    res.status(400).json({
                        message: "Invalid data"
                    })
                }
            }

        } catch (error) {
            res.status(401).json({
                message: error.message,
                stack: process.env.Node_env === 'production' ? null : error.stack
            })
            // console.log(process.env.Node_env);
        }
    },

    //@route /api/users/login
    loginUsers: async (req, res) => {
        try {

            res.status(201).json({
                message: "login user succefully"
            })

        } catch (error) {
            res.status(401).json({
                message: error.message
            })

        }
    }
}