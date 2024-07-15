const express=require('express');
const bodyparser=require('body-parser');
const studentRoutes=require('./routes/studentRoutes');
const sequelize = require('./config/database');

const app=express();
const PORT=process.env.PORT || 3003;

app.use(bodyparser.json());
app.use('/stud',studentRoutes);

sequelize.sync();
app.listen(PORT,()=>{
    console.log('Student Service is running on port');
});