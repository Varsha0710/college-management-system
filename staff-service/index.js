const express=require('express');
const bodyparser=require('body-parser');
const staffRoutes=require('./routes/staffRoutes');
const sequelize = require('./config/database');

const app=express();
const PORT=process.env.PORT || 3002;

app.use(bodyparser.json());
app.use('/staff',staffRoutes);

sequelize.sync();
app.listen(PORT,()=>{
    console.log("Staff Service is running on port");
});