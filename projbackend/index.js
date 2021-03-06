require('dotenv').config();

const express=require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors=require('cors');


mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true}).then(()=>{
    console.log("DB connected");
});

const app=express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const adminRoute=require("./routes/admin");
app.use("/api",adminRoute);

const port=process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`App running on port ${port}`);
});