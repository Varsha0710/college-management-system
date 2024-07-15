const express=require('express');
const router=express.Router();
const studentController=require('../controllers/studentController');
const verifyToken=require('../middleware/studMiddleware');

router.post('/add',verifyToken,studentController.addStudents);
router.get('/',verifyToken,studentController.getAllStudents);
router.get('/byid',verifyToken,studentController.getStudentsById);
router.put('/update',verifyToken,studentController.updateStudent);
router.delete('/delete',verifyToken,studentController.deleteStudent);

module.exports=router;