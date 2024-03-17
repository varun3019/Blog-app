import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
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
    profilePicture:
    {
        type:"String",
        default:"https://cdn.pixabay.com/photo/2016/11/06/19/31/woven-1803874_640.jpg"
    }

},{timestamps:true})

const User = mongoose.model("User",userSchema);

export default User;