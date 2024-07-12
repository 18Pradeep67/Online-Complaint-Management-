import userComplain from "../models/userComplaint.js";

//GET /viewcomplaints
export const viewComplaints=async(req,res)=>{
    try{
        console.log("/viewcomplaints");
        const {agentId}=req.body;
        const result=await userComplain.find({agentId,status: { $ne: 'resolved' }});
        if(result){
            return res.status(200).json({complaints:result});
        }
        else{
            return res.status(401).json({complaints:"Complaints doesnt exist"});
        }
    } catch(err){
        res.status(500).send("Internal Server Error");
        console.log(err);
    }
}

// POST /updatecomplaintstatus

export const updateComplaintStatus=async(req,res)=>{
    try{
        console.log("/updatecomplaintstatus");
        const {ticketId}=req.body;
        const ticket = await userComplain.findOneAndUpdate(
            { ticketId },
            { $set: {  status: 'resolved' } },
            { new: true } // This option ensures the updated document is returned
        );
        if (ticket && ticket.status!="resolved") {
            return res.status(201).json({message:'Ticket updated successfully:', ticket});
        } else {
            return res.status(404).json({message:"Ticket not found"});
        }
    } catch(err){
        res.status(500).send("Internal Server Error");
        console.log(err);
    }
}


