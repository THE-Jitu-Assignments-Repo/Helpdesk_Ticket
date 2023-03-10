const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const userRoutes = require('./routes/user/userRouters')
const ticketRoutes = require('./routes/ticket/ticketRoutes')
const adminRoutes = require('./routes/admin/adminRoutes')
const path = require('path')
const serverless = require('serverless-http')
const cors = require('cors')
// const {errorHandler} = require('./middleware/Helper/errorHandler')
const {connectDB} = require('./config/db')

//conection to DB
connectDB()

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())// to allow sending of data in raw json format
app.use(express.urlencoded({extended: false})) //to accept url encoded form 
// app.use(errorHandler)

// app.use(express.static(path.join(__dirname, 'client/build')))

app.use('/api/users', userRoutes)
app.use('/api/tickets', ticketRoutes)
app.use('/api/admin', adminRoutes)


app.use('/.netlify/functions/api/users', userRoutes)
app.use('/.netlify/functions/api/tickets', ticketRoutes)

// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname+'client/build/index.html'))
// })

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`listening to port ${process.env.PORT? process.env.PORT: 3000}`);
})

module.exports.handler = serverless(app)