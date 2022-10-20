const mongoose = require('mongoose')
const MONGO_URI = "mongodb+srv://kebba:Howareyoudoing1@rentalapp.9p5ry7s.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async ()=>{
    try {
        // mongodb connection
        const conn = await mongoose.connect(MONGO_URI,{
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