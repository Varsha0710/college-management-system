const Staff=require('../models/staff');

const addStaff= async(req,res)=>{
    try{
        const newStaff=await Staff.create(req.body);
        if(newStaff){
            return res.status(200).json(newStaff);
        }else{
            res.json({message:"Unable to adding details"});
        }
    }catch(err){
        res.status(400).json({message:err.message});
    }
}
const getAllStaff= async(req,res)=>{
    try{
        const staff=await Staff.findAll();
        if(staff){
            return res.json(staff);
        }else{
            res.json({message:"Data not found"});
        }
    }
    catch(err){
        res.status(400).json({message:err.message});    
    }
}
const getStaffById= async(req,res)=>{
    try{
        const staff= await Staff.findByPk(req.params.id);
        if(staff){
            return res.status(200).json(staff);
        }else{
            res.json({message:"Data not found"});
        }
    }catch(err){
        res.status(400).json({message:err.message});
    }
}
const updateStaff= async(req,res)=>{
    try{
        const staff= await Staff.findOne({where:{staff_name:req.body.staff_name}});
        if(staff){
            staff.update(req.body);
            return res.status(200).json(staff);
        }else{
            res.json("Unable to updated staff details");
        }
    }catch(err){
        res.status(400).json({message:err.message});
    }
}
const deleteStaff= async(req,res)=>{
    try{
        const staff= await Staff.findOne({where:{staff_name:req.body.staff_name}});
        if(staff){
            staff.destroy();
            return res.status(200).json({message:"Deleted Successfully"}); 
        }else{
            res.json({Message:"Unable to delete data"});
        }
    }catch(err){
        res.status(400).json({messaage:err.message});
    }
}

module.exports={addStaff, getAllStaff, getStaffById, updateStaff, deleteStaff};