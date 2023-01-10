const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRouters')
// const {errorHandler} = require('./middleware/Helper/errorHandler')
const {connectDB} = require('./config/db')

//conection to DB
// connectDB()

dotenv.config()
const app = express()
app.use(express.json())// to allow sending of data in raw json format
app.use(express.urlencoded({extended: false})) //to accept url encoded form 
// app.use(errorHandler)

app.use('/api/users', userRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`listening to port ${process.env.PORT}`);
})