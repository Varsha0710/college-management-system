const staffController=require('../controllers/staffController');
const express=require('express');
const router=express.Router();

router.post('/add',staffController.addStaff);
router.get('/',staffController.getAllStaff);
router.get('/:id',staffController.getStaffById);
router.put('/update',staffController.updateStaff);
router.delete('/delete',staffController.deleteStaff);

module.exports=router;