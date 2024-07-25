const users = require("../model/usermodel");
const jwt = require("jsonwebtoken")

// login
exports.loginController =async(req, res)=>{
    const {email, password} = req.body
    console.log(email, password);
    try {
        const existinguser = await users.find() 
        console.log(existinguser);  
        if(existinguser){
            const token = jwt.sign({userId:existinguser._id},'supersecretKey')
            res.status(200).json({existinguser,token})   }
        else{    
            res.status(406).json("Invalid Email or Password")
        }
        
    } catch (error) {
        res.status(401).json(error)
    }

    
}



   



