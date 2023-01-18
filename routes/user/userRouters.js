const { registerUsers, loginUsers, getUserDetails } = require('../../controllers/user/userController')
const { verifyToken } = require('../../middleware/Auth/authMiddleware')

const router = require('express').Router()


router.post('/', registerUsers)
router.post('/login',loginUsers)
router.get('/test', verifyToken, getUserDetails)

module.exports=router