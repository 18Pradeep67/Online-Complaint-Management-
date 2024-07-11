import mongoose from "mongoose";

const agentComplaintsSchema= new mongoose.Schema({
    _id:{type:String},
    complaints:{type:[String]}
});

const agentComplaints=mongoose.model("agentcomplaint",agentComplaintsSchema);

export default agentComplaints;