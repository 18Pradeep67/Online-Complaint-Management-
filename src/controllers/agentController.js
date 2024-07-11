import userComplain from "../models/userComplaint";
import agentComplaints from "../models/agentComplaints";

//GET /viewcomplaints
export const viewComplaints=async(req,res)=>{
    try{
        console.log("In viewComplaints");
        const {id}=req.body;
        const result=await agentComplaints.findOne({_id:id});
        if(result){
            return res.status(200).json({complaints:result.complaints});
        }
        else{
            return res.status(401).json({complaints:"Complaints doesnt exist"});
        }
    } catch(err){
        res.status(500).send("Internal Server Error");
        console.log(err);
    }
}
// GET /seeticket
export const seeTicket= async(req,res)=>{
    try{
        
        const {ticketNum}=req.body;
        const Tickdet=await userComplain.findOne({ticketId:ticketNum});
        if(Tickdet){
            return res.status(200).json(Tickdet);
        }
    } catch(err){
        res.status(500).send("Internal Server Error");
        console.log(err);
    }
}
// POST /updatestatus


