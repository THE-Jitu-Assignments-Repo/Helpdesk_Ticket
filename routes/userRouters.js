const { registerUsers, loginUsers } = require('../controllers/userController')

const router = require('express').Router()


router.post('/', registerUsers)
router.post('/login',loginUsers)

module.exports=router