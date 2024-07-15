const Student=require('../models/student');

const addStudents= async(req,res)=>{
    try{       
        const newStudent=await Student.bulkCreate(req.body);
        if(!newStudent){
            return res.status(400).json({message:'student not found'});
        }else{
            res.json(newStudent);
        }
    }catch (err){
        res.status(400).json({message:err.message});
    }
}
const getAllStudents= async(req,res)=>{
    try{
        const students=await Student.findAll();
        if(!students){
            return res.status(400).json({Message:'students data not found'});
        }else{
            res.json(students);
        }
    }catch (err){
        res.status(400).json({message:err.message});
    }
}
const getStudentsById= async(req,res)=>{
    try{
        const student=await Student.findOne({where:{college_id:req.body.college_id}});
        if(!student){
            return res.status(400).json({Message:'Data not found'});
        }else{                  
            res.json(student);
        }
    }catch(err){
        res.status(400).json({message:err.message});
    }
}
const updateStudent= async(req,res)=>{
    try{
        const student= await Student.findOne({where:{college_id:req.body.college_id}});
        if(student){
            student.update(req.body);
            return res.status(200).json(student);
        }else{
            res.json({Message:'Data not found'});
        }
    }catch(err){
        res.status(400).json({message:err.message});
    }
}
const deleteStudent= async(req,res)=>{
    try{
        const student= await Student.findOne({where:{college_id:req.body.college_id}});
        if(student){
            student.destroy();
            return res.status(200).json({message:"Deleted student data successfully"});
        }else{
            res.json({Message:'Data not found'});
        }  
    }catch(err){
        res.status(400).json({message:err.message}); 
    }
}

module.exports={addStudents, getAllStudents, getStudentsById, updateStudent, deleteStudent};