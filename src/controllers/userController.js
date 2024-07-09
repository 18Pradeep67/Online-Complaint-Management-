import User from '../models/User.js';
import { hashPassword } from '../utils/bcryptUtils.js';
import { comparePassword } from '../utils/bcryptUtils.js';
export const signup = async (req, res) => {
    try {
        const { name, phno, add, role , username, password } = req.body;
        
        const existingUser = await User.findOne({ username });
        const existingPhone = await User.findOne({ phone_no: phno });

        if (existingUser) {
            return res.send(`
                <script>
                    alert("Username already exists!! Try again!!!");
                    window.location.href = "/";
                </script>
            `);
        }

        if (existingPhone) {
            return res.send(`
                <script>
                    alert("Phone number already exists!! Try again!!!");
                    window.location.href = "/";
                </script>
            `);
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

        res.send(`
            <script>
                alert("User created successfully!");
                window.location.href = "/";
            </script>
        `);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("An error occurred");
    }
};

export const signin = async()=>{
    try{
        var pwd=req.body.password;
        var hashInDb=await User.findOne({username:req.body.username});
        const result=await comparePassword(pwd,hashInDb);
        if(result && req.body.role== hashInDb.role){
            res.status(200).send(`<script>
                alert("Logged in successfully!");
                window.location.href = "/";  
                </script>`); // Need to redirect to the next page
        }else{
            res.status(200).send(`<script>
                alert("Invalid Credentials!!!");
                window.location.href = "/";
                </script>`); // Need to redirect it to the login page again
        }
    }catch(err){
        res.status(401).send("Unauthorized");
    }
};
    