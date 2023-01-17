const Ticket = require('../../models/ticketModel/ticketModel')
const User = require('../../models/userModel')

module.exports = {
    createTickets: async (req, res) => {
        try {
            const {
                product,
                description
            } = req.body
            if (!product || !description) {
                res.status(400)
                throw new Error(`Please add a ${!product? "product": !description?"description":"product and description"}`)
            }

            const user = await User.findById(req.info._id)

            if (!user) {
                res.status(401).json({
                    message: "user not Found"
                })
            }

            await Ticket.create({
                product,
                description,
                user,
                status: 'new'
            })

            res.status(201).json({
                message: "Ticket created successfully"
            })
        } catch (error) {
            res.status(401).json({
                message: error.message,
                stack: process.env.Node_env === 'production' ? null : error.stack
            })
        }
    },
    getTickets: async (req, res) => {
        try {
            // console.log("gvjhvjh");
            const user = await User.findById(req.info._id)

            if (!user) {
                res.status(401).json({
                    message: "user not Found"
                })
            }

            const tickets = await Ticket.find({
                user: req.info._id
            })

            res.status(201).json(
                tickets
            )

        } catch (error) {
            res.status(401).json({
                message: error.message,
                stack: process.env.Node_env === 'production' ? null : error.stack
            })
        }
    },
    getSingleTicket: async (req, res) => {
        try {
            const user = await User.findById(req.info._id)

            if (!user) {
                res.status(401).json({
                    message: "user not Found"
                })
            }

            const singleTicket = await Ticket.findById(req.params.id)
            if (!singleTicket) {
                res.status(404).json({
                    message: "Ticket not Found"
                })
            }

            if (singleTicket.user.toString() !== req.info._id) {
                res.status(401)
                throw new Error('Not authorized')
            }

            res.status(201).json(
                singleTicket
            )

        } catch (error) {
            res.status(401).json({
                message: error.message,
                stack: process.env.Node_env === 'production' ? null : error.stack
            })
        }
    },
    deleteTicket: async (req, res) => {
        try {
            const user = await User.findById(req.info._id)

            if (!user) {
                res.status(401).json({
                    message: "user not Found"
                })
            }

            const singleTicket = await Ticket.findById(req.params.id)
            if (!singleTicket) {
                res.status(404).json({
                    message: "Ticket not Found"
                })
            }

            if (singleTicket.user.toString() !== req.info._id) {
                res.status(401)
                throw new Error('Not authorized')
            }

            await singleTicket.remove()

            res.status(201).json({
                message: "Deleted"
            })

        } catch (error) {
            res.status(401).json({
                message: error.message,
                stack: process.env.Node_env === 'production' ? null : error.stack
            })
        }
    },
    updateTicket: async (req, res) => {
        try {
            const user = await User.findById(req.info._id)

            if (!user) {
                res.status(401).json({
                    message: "user not Found"
                })
            }

            const singleTicket = await Ticket.findById(req.params.id)
            if (!singleTicket) {
                res.status(404).json({
                    message: "Ticket not Found"
                })
            }
            // console.log(singleTicket);
            if (singleTicket.user.toString() !== req.info._id) {
                res.status(401)
                throw new Error('Not authorized')
            }

            const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            })

            res.status(201).json(updatedTicket)

        } catch (error) {
            res.status(401).json({
                message: error.message,
                stack: process.env.Node_env === 'production' ? null : error.stack
            })
        }
    }
}