const express  = require('express')
const app = express()
const dotenv = require('dotenv')

const connectDB = require('./src/server/database/connection')

// mongodb connection
connectDB()

dotenv.config({path:`config.env`})
const PORT = process.env.PORT || 8080
 

  


app.get('/', (request, respond) =>{
    respond.send('hello')
})



 



app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}`);
})