const mongoose = require('mongoose')
const dotenv = require('dotenv')


// configuring dotenv
dotenv.config({path:`config.env`})

//  creating mongodb connection
const connectDB = async ()=>{
    try {
        // mongodb connection
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            // useNewUriParser: true,
            // useUnifiedTopology: true,
            // useFindAndModify: false,
          
            autoIndex: false
        })

    console.log(`MongoDB connection: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB