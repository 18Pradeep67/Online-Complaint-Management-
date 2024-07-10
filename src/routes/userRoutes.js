import express from 'express';
import { signup,signin } from '../controllers/userController.js';
import { complaintReg } from '../controllers/userComplaintController.js';
import { getStatus } from '../controllers/userComplaintController.js';
import { get } from 'mongoose';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin',signin);
router.post('/complaintReg',complaintReg);
router.get('/getstatus',getStatus);

export default router;
