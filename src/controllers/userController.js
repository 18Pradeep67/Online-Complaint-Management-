import { hash } from 'bcrypt';
import User from '../models/User.js';
import { hashPassword } from '../utils/bcryptUtils.js';
import { comparePassword } from '../utils/bcryptUtils.js';

// POST /signup
//creating dummy funcfor sending otp
export const signup = async (req, res) => {
    try {
        console.log("/signup")
        const { name, phno, add, role , username, password } = req.body;
        const existingUser = await User.findOne({ username });
        const existingPhone = await User.findOne({ phone_no: phno });

        if (existingUser) {
            return res.status(400).json({ error: "Username already exists. Please choose a different username." });
        }

        if (existingPhone) {
            return res.status(400).json({error: "Phone number already exists. Please choose a different username."});
        }

        const hashedPassword = await hashPassword(password);

        const newUser = new User({
            full_name: name,
            phone_no: parseInt(phno),
            address: add,
            role,
            username,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(200).send("User registered successfully");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("An error occurred");
    }
};

// POST /signin
export const signin = async(req, res)=>{
    try{
        console.log("/signin")
        const { role , username, password } = req.body;
        var hashInDb=await User.findOne({username});
        if(!hashInDb){
            return res.status(401).send("Username does not exist!!!!");
            
        }
        const result=await comparePassword(password,hashInDb.password);
        if(result && role== hashInDb.role){
            return res.status(200).send("User logged in!!");
        }else{
           return res.status(401).send("Unauthorized");
        }
    }catch(err){
        res.status(500).send("Internal Server Error");
    }
};
    