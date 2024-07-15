const deptController=require('../controllers/departmentController');
const express=require('express');
const router=express.Router();

router.post('/add',deptController.addDept);
router.get('/',deptController.getAllDept);
router.get('/:id',deptController.getDeptById);
router.put('/update',deptController.updateDept);

module.exports=router;