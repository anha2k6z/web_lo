import express from 'express';
import bodyParser from 'body-parser';
import configViewEngine from './config/viewEngine';
import initWebRoute from './route/webURL';
import connectDB from './config/connectDB';
import cors from 'cors';
require("dotenv").config();
let app=express()
app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:3000',  // Chỉ cho phép frontend trên localhost:3000 truy cập
    credentials: true  // Nếu bạn cần gửi cookies hoặc header tùy chỉnh
}))
app.use(bodyParser.urlencoded({extended:true}))
configViewEngine(app)
initWebRoute(app)
connectDB()
let Port = process.env.PORT||6969 
app.listen(Port,()=>{
    console.log("Run server : "+Port)
})
