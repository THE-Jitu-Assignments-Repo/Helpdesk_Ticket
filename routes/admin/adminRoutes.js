const { getAdminInfo, getUsers } = require('../../controllers/admin/adminController')

const router = require('express').Router()


router.get('/', getAdminInfo)
router.get('/users', getUsers)

module.exports=router