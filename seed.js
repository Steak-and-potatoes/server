'use strict';

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_KEY);

const recipeModel = require('./modules/recipeModel.js');


async function seed() {
    await recipeModel.create({
        idMeal:'boogers',
        strMeal:'boogers',
        strCategory:'boogers',
        strArea:'boogers',
        strInstructions:'boogers',
        strMealThumb:'boogers',
        strTags:'boogers',
        strYoutube:'boogers',
        arrayIngredients:['boogers','boogers'],
        strUserName:'boogers',
        strUserEmail:'jacobbassett@gmail.com'
    })
        .then(() => console.log('Saved book to the DB.'))
        .catch((err) => console.error(err));

    mongoose.disconnect();
}

seed();
