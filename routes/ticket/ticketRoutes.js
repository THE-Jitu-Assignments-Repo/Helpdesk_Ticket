const { getTickets, createTickets } = require('../../controllers/ticket/ticketControllers')
const { verifyToken } = require('../../middleware/Auth/authMiddleware')
const router = require('express').Router()


router.post('/create',verifyToken,createTickets)
router.get('/get',verifyToken,getTickets)



module.exports=router