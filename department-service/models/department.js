const {DataTypes}=require('sequelize');
const sequelize=require('../config/database');

const dept=sequelize.define('deptdetails',{
    course_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    degree:{
        type:DataTypes.STRING,
        allowNull:false
    },
    years:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    fees:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});


module.exports=dept;