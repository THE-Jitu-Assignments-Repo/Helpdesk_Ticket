const Note = require('../../models/Note/noteModel')
const User = require('../../models/userModel')
const Ticket = require('../../models/ticketModel/ticketModel')


module.exports={
    getNotes: async(req,res)=>{
        try {
            const user = await User.findById(req.info._id)

            if (!user) {
                res.status(401).json({
                    message: "user not Found"
                })
            }

            const singleTicket = await Ticket.findById(req.params.ticketID)
            if (!singleTicket) {
                res.status(404).json({
                    message: "Ticket not Found"
                })
            }

            if (singleTicket.user.toString() !== req.info._id) {
                res.status(401)
                throw new Error('Not authorized')
            }
            const notes = await Note.find({ticket: req.params.ticketID})

            res.status(200).json(
                notes
            )

        } catch (error) {
            res.status(401).json({
                message: error.message,
                stack: process.env.Node_env === 'production' ? null : error.stack
            })
        }
    },

    // post request
    addNote: async(req,res)=>{
        try {
            const user = await User.findById(req.info._id)

            if (!user) {
                res.status(401).json({
                    message: "user not Found"
                })
            }

            const singleTicket = await Ticket.findById(req.params.ticketID)
            if (!singleTicket) {
                res.status(404).json({
                    message: "Ticket not Found"
                })
            }

            if (singleTicket.user.toString() !== req.info._id) {
                res.status(401)
                throw new Error('Not authorized')
            }
            const note = await Note.create({
                text: req.body.text,
                isStaff: false,
                user: req.info._id,
                ticket: req.params.ticketID})
            
            res.status(200).json(
                note
            )

        } catch (error) {
            res.status(401).json({
                message: error.message,
                stack: process.env.Node_env === 'production' ? null : error.stack
            })
        }
    }
}