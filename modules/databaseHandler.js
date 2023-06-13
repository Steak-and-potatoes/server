'use strict';

let recipeModel = require('./recipeModel');


let databaseHandler = {};


databaseHandler.defaultBooksRoute = (req,res) => {
    res.status(200).send('default route working');
};

databaseHandler.getAllRecipes = (req,res) => {
    let queryObject = {email:req.body.email};
    console.log(queryObject);
    recipeModel.find(queryObject)
        .then(recipes => res.status(201).json(recipes))
        .catch(err => res.status(501).send(err));
    
};


module.exports = databaseHandler;
