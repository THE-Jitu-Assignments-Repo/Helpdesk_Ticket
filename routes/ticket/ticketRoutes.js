const {
    getTickets,
    createTickets,
    getSingleTicket,
    deleteTicket,
    updateTicket
} = require('../../controllers/ticket/ticketControllers')
const {
    verifyToken
} = require('../../middleware/Auth/authMiddleware')
const router = require('express').Router()

// a reroute into note router
const noteRouter = require('../note/noteRoutes')
router.use('/:ticketID/notes', noteRouter)

router.post('/', verifyToken, createTickets)
router.get('/', verifyToken, getTickets)

router.get('/:id', verifyToken, getSingleTicket)
router.delete('/:id', verifyToken, deleteTicket)
router.put('/:id', verifyToken, updateTicket)


// chaining routes
// router.route('/').post(verifyToken, createTickets).get(verifyToken, getTickets)
// router.route('/:id').get(verifyToken, getSingleTicket).delete(verifyToken, deleteTicket).put(verifyToken, updateTicket)


module.exports = router