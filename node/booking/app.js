const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();



const mainRouter = require('./api/api.router');
const {PORT, MONGO_URL} = require('./configs/variables');

const app = express();

mongoose.set('debug', true);
mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URL);


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', mainRouter);

app.listen(PORT, () =>{
    console.log('Listen', PORT)
});