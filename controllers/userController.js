const dotenv = require('dotenv').config()

module.exports = {
    //@route /api/users
    registerUsers: async(req, res) => {
        try {
            const {
                username,
                email,
                password
            } = req.body
            // console.log(username, email, password);
            //@validation
            if (!username || !email || !password) {
                // res.status(400).json({
                //     message: "Please include all the empty fields"
                // })
                res.status(400)
                throw new Error('Please include all the empty fields')
            } else{
                res.status(201).json({
                    message: "registered succefully"
                })

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