const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/auth');

const SecretKey=process.env.SECRETKEY;

const register=async (req,res)=>{
    let {username,password}=req.body;
    let hashedPassword=await bcrypt.hash(password,10);
    try{
        const user=User.create({username,password:hashedPassword});
        if(user){
            return res.status(200).json(user);
        }else{
            res.json({message:'User not found'})
        }    
    }catch(err){
        res.status(400).json({Error:'Failed to registered'});
    }
};

const login=async (req,res)=>{
    let {username,password}=req.body;
    let user=await User.findAll({where:{username:req.body.username}});
    
    let data=user[0];
    if(!data){
        return res.status(400).json({message:'Invalid username'});
    } 
    bcrypt.compare(password,data.password,(err,checkpass)=>{
        console.log(checkpass);

        if(!checkpass){
            return res.status(400).json({message:'Invalid password'});
        }
    });
    token=jwt.sign({username:username,role:data.role},SecretKey,{expiresIn:'1h'});
    return res.status(400).json({username,token,message:'Login successfully'});
};

module.exports={register,login};