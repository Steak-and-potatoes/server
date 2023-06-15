'use strict';

let mongoose = require('mongoose');

let recipeSchema = new mongoose.Schema ({
    idMeal:{type: String, require:true},
    strMeal:{type: String, require:true},
    strCategory:{type: String},
    strArea:{type: String},
    strInstructions:{type: String},
    strMealThumb:{type: String},
    strYoutube:{type: String},
    arrayIngredients:{type: Array},
    strUserEmail:{type: String, require:true},
    strNotes:{type: String}
});


module.exports = mongoose.model('recipeModel',recipeSchema);
