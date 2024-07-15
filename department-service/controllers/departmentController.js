const Department=require('../models/department');
const departmentSchema=require('../middleware/deptMiddleware');

const addDept= async(req,res)=>{
    try{
        const validatedDeptData = await departmentSchema.validateAsync(req.body);
        const newDepartment= await Department.create(validatedDeptData);
        if(!newDepartment){
            return res.status(400).json("Unable to add department");
        }else{
            res.json(newDepartment);
        }
    }catch(err){
        res.status(400).json({message:err.message});
    }
}
const getAllDept= async(req,res)=>{
    try{
        const department= await Department.findAll(req.params.id);
        if(department){
            return res.status(200).json(department);
        }else{
            res.json({message:"Department not found"});
        }
    }catch(err){
        res.status(400).json({message:err.message});
    }
}
const getDeptById= async(req,res)=>{
    try{
        const department= await Department.findByPk(req.params.id);
        if(!department){
        res.status(400).json({Message:"Department not found"});
        }
        else{
            res.json(department);
        }
    }catch(err){
        res.status(400).json({message:err.message});
    }
}
const updateDept= async(req,res)=>{
    try{
        const department= await Department.findOne({where:{course_name:req.body.course_name}});
        if(department){
            department.update(req.body);
            return res.status(200).json(department);
        }else{
            res.json({message:"Unable to update department"})
        }
    }catch(err){
        res.status(400).json({message:err.message});
    }
}

module.exports={addDept, getAllDept, getDeptById, updateDept}; 