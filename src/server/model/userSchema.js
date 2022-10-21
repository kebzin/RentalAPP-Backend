const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        require: true,
        trim: true,
        maxLength: 30
    },
    lastName:{
        type: String,
        require: true,
        trim: true,
        maxLength: 30
    },
    phoneNumber:{
        type: String,
        require: true,
        trim: true,
        maxLength: 7,
        
    },
    email:{
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
        trim: true,
        minLength: 7
    },
    vPassword:{
        type: String,
        require: true,
        trim: true,
        minLength: 7
    },

   
    
},
{timeseries: true}
)

const Userdb = mongoose.model('User', userSchema)

module.exports = Userdb