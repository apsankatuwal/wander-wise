// const express = require('express');
import express from 'express';
import connectDB from './config/database.js';
// import dotenv from 'dotenv';

// dotenv.config(); => old approach to load .env variables

import HANDLERS from './handlers/index.js';
import errorMiddleware from './middlewares/error.js';

const app = express();
const port = process.env.PORT;



connectDB();
app.use(express.json());
app.use("/", HANDLERS);
app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`);
});
