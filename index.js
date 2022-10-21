const express  = require('express')
const app = express()
const dotenv = require('dotenv')

const connectDB = require('./src/server/database/connection')
const router = require('./src/server/routes/userRout');
// dotenv configuration
dotenv.config({path:`config.env`})
const PORT = process.env.PORT || 8080


// middleware
app.use(express.json())
app.use('/api/users', router)


// mongodb connection
connectDB()

app.get('/', (request, respond) =>{
    respond.send('hello')
})


app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}`);
})