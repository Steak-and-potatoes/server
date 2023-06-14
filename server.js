'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const optionsHandler = require('./modules/optionsHandler');
const recipeHandler = require('./modules/recipeHandler');
const deleteHandler = require('./modules/deleteHandler');

// const mongoose = require("mongoose");

//import global variables
const PORT = process.env.PORT;

//create server, specify allowed request origins, and data format
const app = express();
app.use(cors());
app.use(express.json());

//connect to mongodb atlas and verify connect is working
// mongoose.connect(process.env.MONGODB_URL);
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error"));
// db.once("open", () => console.log("Mongoose is connected"));

//route handlers

app.get('/', (req, res) => {
    console.log('in the home route');
    res.status(200).send('Hey your default route is working');
});

app.get('/options', optionsHandler);

app.get('/recipe', recipeHandler);
app.delete('/deleteRecipe/:id', deleteHandler);
//handle errors
app.use((err, req, res) => {
    res.status(500).json(err);
});

//server listens to given domain and port
app.listen(PORT, () => console.log(`listening on ${PORT}`));
