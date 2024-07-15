const jwt=require('jsonwebtoken');
require("dotenv").config();
const SecretKey=process.env.SECRETKEY ;

const verifyToken=(req,res,next)=>{
    let token=req.headers.authorization;
    
    if(!token){
        return res.status(400).json({error:'Access denied'});
    }
    try{
        const decoded=jwt.verify(token,SecretKey);
        if(decoded.role=="admin" || decoded.role=="hod"){
            res.json({message:`welcome ${decoded.username}`});
            next();
        }
        else{
            res.status(400).json({message:"User dont have an access"});

        }
    }catch(err){
        res.status(400).json({error:'Invalid token'});
    }
};

module.exports={verifyToken};