module.exports = {
    registerUsers: async (req, res) => {
        try {
            res.status(201).json({
                message: "registered succefully"
            })
        } catch (error) {
            res.status(401).json({
                message: error.message
            })
        }
    },
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