const express  = require('express')
const app = express()


app.get('/', (request, respond) =>{
    respond.send('hello')
})




const PORT = 3001

app.listeners(PORT, ()=>{
    console.log(`app is running on port ${PORT}`);
})