

const express = require('express')
const Userdb = require('../model/userSchema')

// get all user

const getAlluser = async (request, respond, next)=>{// this function get all the user from the database
    let users;
    try {
        
        users = await Userdb.find() // this will find all ther user
    } catch (error) {
        return next(error)
    }
    if (!users) {// checking if the user is getting the right data
        return respond.status(500).json({message: 'internal server error'})
    }
    return respond.status(200).json({users}) // if no error occure thhis will respond with all the user
} 



// post method 
// this method add a user to the database 

const AddtUser = async (request,respond, next)=>{
    const {firstName, lastName, phoneNumber, email, password, vPassword, role} = request.body; // extracting the data to be send to the server
   
//  checking some validation befor adding the user
    if (!firstName && firstName==='' && lastName=== '' && phoneNumber == '' 
         && email === '' && !password && password === '' && !vPassword && vPassword ===''
        && !vPassword === password
     ) { 
        return respond.status(422).json({message: 'invalid data'})//  this means that unproccable entities :: data cannot be send to the databse when conductiion become true

    }

    let user

    try {
        user = new Userdb({ // creating an instance of the user schema :: this object ata will be send to the database 
            firstName, 
            lastName, 
            phoneNumber, 
            email, 
            password, 
            vPassword,
             role
        });
        user = await user.save() // saving the add use to the datbase 
    } catch (error) {
        return next(error)
        
    }

    if (!user) {
        return respond.status(500).json({message: 'unable to save user :: user not save'}) // if the user dident save display a message
    }

    return respond.status(201).json({user})// user have been save to the database if all successeed
}



// update the user

const UserUpdate = async (request, respond, next)=>{
    const id = request.params.id     

    const {firstName, lastName, phoneNumber, email, password, vPassword,} = request.body; // extracting the data to be send to the server
   
    //  checking some validation befor adding the user
        if (!firstName && firstName==='' && lastName=== '' && phoneNumber == '' 
             && email === '' && !password && password === '' && !vPassword && vPassword ===''
            && !vPassword === password
         ) { 
            return respond.status(422).json({message: 'invalid data'})//  this means that unproccable entities :: data cannot be send to the databse when conductiion become true
    
        }

        let user;
        try {
            user = await Userdb.findByIdAndUpdate(id, {
                firstName, lastName, phoneNumber, email, password, vPassword,
            })
        } catch (error) {
            return next(error)
        }
       
        if (!user) {
            return respond.status(500).json({message: 'unable to save user'})
        }
        return respond.status(2001).json({message: 'data save succesfull'})
}
module.exports = UserUpdate,
module.exports = getAlluser;
module.exports = AddtUser;