    import { errorHandler } from "../../utils/error.js";
    import User from "../models/user.model.js";
    import bcryptjs from "bcryptjs"
    export const signup = async (req,res,next)=>
    {
        const {username,email,password} = req.body;
        console.log(password);

        if(!username || !email || !password || username=== '' || email=== '' || password=== '')
        {
            next(errorHandler(400,'All field are mandotory'));
        }
        const hashedPassword =  bcryptjs.hashSync(password,10);

        const newUser = new User({
            username,
            email,
            password:hashedPassword
        });

        try{
            await newUser.save();
            res.json("signup successfull");
        }
        catch(error)
        {
            next(error);
        }
    }