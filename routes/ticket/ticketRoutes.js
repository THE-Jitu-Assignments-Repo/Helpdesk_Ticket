const { getTickets, createTickets, getSingleTicket, deleteTicket, updateTicket } = require('../../controllers/ticket/ticketControllers')
const { verifyToken } = require('../../middleware/Auth/authMiddleware')
const router = require('express').Router()


router.post('/create',verifyToken,createTickets)
router.get('/get',verifyToken,getTickets)
router.get('/:id',verifyToken,getSingleTicket)
router.delete('/:id',verifyToken,deleteTicket)
router.put('/:id',verifyToken,updateTicket)


module.exports=router