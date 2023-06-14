"use strict";

let recipeModel = require("./recipeModel");

let databaseHandler = {};

databaseHandler.defaultBooksRoute = (req, res) => {
    res.status(200).send("default route working");
};

databaseHandler.getAllRecipes = (req, res) => {
    let queryObject = { strUserEmail: req.headers.email };
    console.log(queryObject);
    recipeModel.find(queryObject)
        .then(recipes => res.status(201).json(recipes))
        .catch(err => res.status(501).send(err));
};

databaseHandler.deleteRecipeById = async (req, res) => {
    try {
        const id  = req.params.id;
        await recipeModel.findByIdAndDelete(id);
        res.status(200).send('Recipe Deleted');
    } catch (err) {
        res.status(409).send(err);
    }
};

databaseHandler.modifyRecipe = (req, res) => {
    let id = req.params.id;
    let data = req.body;
    recipeModel.findByIdAndUpdate(id, data, { new: true, overwrite: true })
        .then((recipe) => res.status(201).json(recipe))
        .catch((err) => res.status(501).send(err));
};

module.exports = databaseHandler;
