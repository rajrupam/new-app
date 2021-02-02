const express=require('express');
const mongoose=require('mongoose');
require('dotenv/config');
const authRoute=require('./Routes/routes');


const app= express();
app.use(express.json());
app.use('/users',authRoute);



mongoose.connect(process.env.DB_CONNECT,()=>{
    console.log('connected');
})






app.listen(process.env.PORT,()=>{
    console.log("listening on port 8080")
})