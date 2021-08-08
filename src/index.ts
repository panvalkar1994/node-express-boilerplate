import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import mongoose from 'mongoose';
import { MongoConstants } from "./constants/mongodb.constants";


const PORT = 3000;
const app: Application = express();

// mongodb connection
const uri = `mongodb+srv://${MongoConstants.userName}:${MongoConstants.password}@cluster0.ztlca.mongodb.net/${MongoConstants.collection}?retryWrites=true&w=majority`;

mongoose.connect(uri)
    .then((result)=>{
        console.log('connected to db', result);
        app.listen(PORT, ()=>{
            console.log("Server Running on Port:",PORT);
        })
    })
    .catch((err)=>console.log('error',err));


app.use(morgan('dev'));

app.get('/home', (req:Request, res:Response)=>{
    res.send("Backend Apis and Pages Working");
})

import baseRouter from './routes/_router';
app.use('/', baseRouter);
