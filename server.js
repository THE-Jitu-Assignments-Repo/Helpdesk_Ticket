const express = require('express')
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRouters')

dotenv.config()
const app = express()
app.use(express.json())// to allow sending of data in raw json format
app.use(express.urlencoded({extended: false})) //to accept url encoded form 

app.use('/api/users', userRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`listening to port ${process.env.PORT}`);
})