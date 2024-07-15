const express=require('express');
const {createProxyMiddleware}=require('http-proxy-middleware');
const config=require('./config');

const app=express();

const routes={
    '/auth':config.AUTH,
    '/dept':config.DEPARTMENT,
    '/staff':config.STAFF,
    '/stud':config.STUDENT
};

for(const route in routes){
    const target=routes[route];
    app.use(route,createProxyMiddleware({target}));
}

app.listen(3004,()=>{
    console.log("api gateway running on port");
});