import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
uername:{
    type:String,
    required:true,
    unique:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
    
},
uername:{
    type:String,
    required:true,
    unique:true
},
},{timestems:true});

const User=mongoose.model("user",userSchema);

export default User