import mongoose, { Schema } from "mongoose";



const userSchema= new mongoose.Schema({
    userName:{
        type:String,
        required:[true,`Please provide a username`],
        maxlength:[50,`Username cannot be more than 50 characters`],
        minlength:[3,`Username cannot be less than 3 characters`]

    },
    email:{
        type:String,
        required:[true,`Please provide a email`],
        unique:true,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Please provide a valid email"],
    },
    password:{
        type:String,
        required:[true,`Please provide a password`],
        minlength:[6,`Password cannot be less than 6 characters`]

    },
    phoneno:{
        type:String,
        required:[true,`Please provide a phone number`],
        maxlength:[10,`Phone number cannot be more than 10 characters`],
        minlength:[10,`Phone number cannot be less than 10 characters`],

    }

})

const userModel = mongoose.model("User",userSchema)

export default userModel;