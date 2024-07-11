import mongoose, { Mongoose } from "mongoose";

const userSchema= new mongoose.Schema({
    _id:{type:String, required:true},
    full_name: { type: String, required: true },
    address: { type: String, required: true },
    phone_no: { type: Number, required: true },
    role:{type: String, required:true},
    username: { type: String, required: true },
    password: { type: String, required: true },
});

const User=mongoose.model('UserCred',userSchema);

export default User