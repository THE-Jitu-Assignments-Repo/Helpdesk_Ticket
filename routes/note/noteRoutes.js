const { getNotes, addNote } = require('../../controllers/Note/noteController')
const { verifyToken } = require('../../middleware/Auth/authMiddleware')

const router = require('express').Router({mergeParams:true})


router.get('/', verifyToken, getNotes)
router.post('/', verifyToken, addNote)

module.exports= router