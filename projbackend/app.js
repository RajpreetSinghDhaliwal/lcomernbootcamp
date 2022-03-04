require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: true
}).then(()=> {
    console.log("DB connected")
}).catch((error) => {console.log(error)});

 const port = process.env.PORT || 8000;
 app.listen(port,()=>{
     console.log(`app is running at ${port}`);
 })