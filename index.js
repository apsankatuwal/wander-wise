// const express = require('express');
import express from 'express';
import connectDB from './config/database.js';
// import dotenv from 'dotenv';

// dotenv.config(); => old approach to load .env variables

const app = express();
const port = process.env.PORT;


// old approach
function helloWorldold(req, res){
    res.send('hello world1');
}

// name function 
// new approach
const helloWorldnew = (req, res) => {
    res.send('hello world!');
}

app.get('/', (req, res) => {
    res.send('hello again world!');
});

connectDB();

app.listen(port, () => {
    console.log(`Example app listening at https://locolhost:${port}`);
})
