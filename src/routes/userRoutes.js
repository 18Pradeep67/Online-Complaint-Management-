import express from 'express';
import { signup,signin } from '../controllers/userController.js';
import { complaintReg } from '../controllers/userComplaintController.js';
import { getUserComplaints } from '../controllers/userComplaintController.js';
import { get } from 'mongoose';
import {getAgents,getAllComplaints,assignAgent} from '../controllers/adminController.js'
import {viewComplaints,updateComplaintStatus} from '../controllers/agentController.js'
const router = express.Router();

router.post('/signup', signup);
router.post('/signin',signin);
router.post('/complaintReg',complaintReg);
router.get('/getusercomplaints',getUserComplaints);
router.get('/getagents',getAgents)
router.get('/getallcomplaints',getAllComplaints)
router.post('/assignagent',assignAgent)
router.get('/viewagentcomplaints',viewComplaints)
router.post('/updatecomplaintstatus',updateComplaintStatus)




export default router;
