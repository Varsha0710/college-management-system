const express=require('express');
const bodyparser=require('body-parser');
const deptRoutes=require('./routes/departmentRoutes');
const sequelize = require('./config/database');

const app=express();
const PORT=process.env.PORT || 3001;

app.use(bodyparser.json());
app.use('/dept',deptRoutes);

sequelize.sync();
app.listen(PORT,()=>{
    console.log("Department Service is running on port");
});