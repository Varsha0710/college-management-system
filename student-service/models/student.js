const sequelize=require('../config/database');
const {DataTypes}=require('sequelize');

const stud=sequelize.define('studdetails',{
    college_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    stud_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    dateofbirth:{
        type:DataTypes.DATE,
        allowNull:false
    },
    year:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    department_Id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    section:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mail_id:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone_no:{
        type:DataTypes.DOUBLE,
        allowNull:false
    }
});

const dept=sequelize.define("deptdetails",{},{
    tablename:'deptdetails'
});

dept.hasMany(stud,{foreignKey:"department_Id"});

module.exports=stud;