
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const { config } = require("dotenv");
var cookieParser = require('cookie-parser')
const app = express();


dotenv.config({path: "./config.env"});
require("./db/conn");
app.use(express.json());
app.use(cookieParser())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

app.use(require("./router/auth"));

const PORT = process.env.PORT;

app.get("/contact",(req,res)=>{
    res.send("Hello world contact from server");
})

app.get("/typing-tutor",(req,res)=>{
    console.log("hello this is tutor");
    res.send("Hello world tutor from server");
})

app.get("/typing-test",(req,res)=>{
    res.send("Hello world typing-test from server");
})

app.get("/learn",(req,res)=>{
    res.send("Hello world Learn from server");
})

app.get("/courses",(req,res)=>{
    res.send("Hello world Courses from server");
})

app.get("/signup",(req,res)=>{
    res.send("Hello world regestration Courses from server");
})

app.get("/signin",(req,res)=>{
    res.send("Hello world login-page Courses from server");
})



app.listen(PORT,()=>{
    console.log(`"Server is listening at port number ${PORT}`);
})

