const express = require('express')
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRouters')

dotenv.config()
const app = express()

app.use('/api/users', userRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`listening to port ${process.env.PORT}`);
})