const {DataTypes}=require('sequelize');
const sequelize=require('../config/database');

const Staff=sequelize.define('staffdetails',{
    staff_name:{
        type:DataTypes.STRING,
        allowNull:true
    },
    department_Id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mail_id:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone_no:{
        type:DataTypes.BIGINT,
        allowNull:false
    }
});

const dept=sequelize.define("deptdetails",{},{
    tablename:'deptdetails'
});

dept.hasMany(Staff,{foreignKey:"department_Id"});

module.exports=Staff;