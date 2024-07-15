const jwt=require('jsonwebtoken');

const verifyToken=async (req,res,next)=>{
    const token=req.headers.authorization;
    if(!token){
        return res.json({message:"Token is required"});
    }
    try{
        const decoded=jwt.verify(token,process.env.SecretKey);
        if(decoded.role=="admin" || decoded.role=="hod"){
            next();
        }
        else{
            res.json({message:"User dont have an access"});

        }
    }catch(err){
        res.json({error:'Invalid token'});
    }
};

module.exports=verifyToken;