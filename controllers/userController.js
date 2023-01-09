module.exports = {
    //@route /api/users
    registerUsers: async (req, res) => {
        try {
            const {
                username,
                email,
                passsword
            } = req.body

            //@validation
            if (!username || !email || !passsword) {
                res.status(400).json({
                    message: "Please include all the empty fields"
                })
            } else {

                res.status(201).json({
                    message: "registered succefully"
                })
            }

        } catch (error) {
            res.status(401).json({
                message: error.message
            })
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