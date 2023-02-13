const Note = require('../../models/Note/noteModel')
const User = require('../../models/userModel')
const Ticket = require('../../models/ticketModel/ticketModel')


module.exports = {
    getAdminInfo: async (req, res) => {
        // Create query object with ticket, note, and user references
        let query = {
            $lookup: {
                from: Ticket,
                localField: Ticket._id,
                foreignField: User._id,
                as: 'tickets'
            },
            $lookup: {
                from: Note,
                localField: Note._id,
                foreignField: User._id,
                as: 'notes'
            }
        };

        User.aggregate([query]).exec((err, users) => {
            if (err) {
                return res.send({
                    error: true,
                    message: err
                })
            }
            res.statue(200).json({
                data: users
            })
        })

        
    },
    getUsers: async(req, res) => {
        User.find({isAdmin: false}).exec((err, users) => {
            if (err) {
                return res.send({
                    error: true,
                    message: err
                })
            }
            res.status(200).json({
                data: users
            })
        })
    },

}