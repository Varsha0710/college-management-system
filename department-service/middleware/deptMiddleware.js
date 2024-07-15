const Joi = require('joi');

const departmentSchema = Joi.object({
    course_name: Joi.string().required(),
    degree: Joi.string().required(),
    years: Joi.number().integer().required(),
    fees: Joi.number().integer().required()
});

module.exports=departmentSchema;