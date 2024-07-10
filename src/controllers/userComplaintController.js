import userComplain from "../models/userComplaint.js";
import {v4 as uuidv4} from 'uuid';

//POST complaintReg
export const complaintReg=async (req,res)=>{
    try{
        console.log("In complaintReg");
        const {name, phoneNumber, emailId, complaintDescription}=req.body;
        var compTicketId=uuidv4()
        const newComplaint=new userComplain({
            name,
            phoneNum:parseInt(phoneNumber),
            email:emailId,
            complaintDescription,
            status:"Pending",
            ticketId: compTicketId,
        });
        await newComplaint.save();
        return res.status(201).json({message:"Your complaint has been registered",ticketId:compTicketId});
    } catch(err){
        res.status(501).send("Internal Server Error");
        console.error("Error!! ",err);
    }
};

//GET getstatus
export const getStatus=async (req,res)=>{
    try{
        console.log("In getStatus");
        const {ticketNumber}=req.body;
        const result=await userComplain.findOne({ticketId:ticketNumber});
        if(result){
            return res.status(201).json({message:"Found the complaint",status:result.status});
        }else{
            return res.status(404).json({message:"Incorrect ticket number",status:"Request is not registered"});
        }
    } catch(err){
        res.status(500).send("Internal Server Error");
        console.error("Error!! ",err);
    }
}