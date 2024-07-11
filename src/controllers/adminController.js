import userComplain from "../models/userComplaint";
import agentComplaints from "../models/agentComplaints";

//POST /assignagent
export const assignAgent= async(req,res)=>{
    try{
        const {agentId,ticketNum}=req.body;
        const searchRes=await agentComplaints.findOne({_id:agentId});
        if(searchRes){
            await agentComplaints.updateOne({ _id: agentId },
                { $push: { complaints: ticketNum } });
                return res.status(200).json({message:"Assigned successfully"});
        }
        else{
            const firstComplaint= new agentComplaints({
                _id:agentId,
                complaints:{ticketNum},
            });
            await firstComplaint.save();
            return res.status(200).json({message:"Assigned successfully"});
        }
    } catch(err){
        return res.status(500).send("Internal Server Error");
        console.error(err);
    }
}
//GET /getagents
export const getAgents= async(req,res)=>{
    try{
         
    } catch(err){
        return res.status(500).send("Internal Server Error");
        console.error(err);
    }
}