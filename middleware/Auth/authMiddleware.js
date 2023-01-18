const jwt = require('jsonwebtoken')
const User = require('../../config/db')

module.exports={
    verifyToken: async(req,res,next)=>{
        try {
            const token = req.headers.authorization
            // console.log(token);

            if(!token){
                return res.status(402).json({message: "Not authorized, Please provide a token"})
            }
            const decodedTokeData = jwt.verify(token.split(" ")[1], process.env.SECRET)

            // console.log(decodedTokeData);
            req.info = decodedTokeData
            // console.log(req.info._id);
            // req.user = 
        } catch (error) {
            return res.status(401).json({message: error.message})
        }
        next()
    }
}