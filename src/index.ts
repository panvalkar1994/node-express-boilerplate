import express, { Application, Request, Response } from "express";
import morgan from "morgan";

const PORT = 3000;
const app: Application = express();

app.use(morgan('dev'));

app.get('/home', (req:Request, res:Response)=>{
    res.send("Backend Apis and Pages Working");
})

import baseRouter from './routes/_router';
app.use('/', baseRouter);

app.listen(PORT, ()=>{
    console.log("Server Running on Port:",PORT);
})