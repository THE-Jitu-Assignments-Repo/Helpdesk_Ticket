const { getUsers, getUserTickets } = require('../../controllers/admin/adminController')

const router = require('express').Router()


router.get('/', getUserTickets)
router.get('/users', getUsers)

module.exports=router