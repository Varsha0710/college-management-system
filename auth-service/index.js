const express=require('express');
const bodyparser=require('body-parser');
const authRoutes=require('./routes/authRoutes');
const sequelize = require('./config/database');

const app=express();
const PORT=process.env.PORT || 3000;

app.use(bodyparser.json());
app.use('/auth',authRoutes);

sequelize.sync()
app.listen(PORT,()=>{
    console.log('Auth Server is running on port');
});
