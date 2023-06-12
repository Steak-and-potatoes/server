'use strict';

let recipeModel = require('./recipeModel');


let databasehandler = {};


databasehandler.defaultBooksRoute = (req,res) => {
    res.status(200).send('default route working');
};

databasehandler.getAllRecipes = (req,res) => {
    let queryObject = {email:req.user.email};
    recipeModel.find(queryObject)
        .then(recipes => res.status(201).json(recipes))
        .catch(err => res.status(501).send(err));
};


module.exports = databasehandler;
