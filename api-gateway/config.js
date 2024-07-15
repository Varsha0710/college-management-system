const dotenv=require('dotenv');
dotenv.config();

const {AUTH, DEPARTMENT, STAFF, STUDENT}= process.env;

module.exports={AUTH, DEPARTMENT, STAFF, STUDENT};