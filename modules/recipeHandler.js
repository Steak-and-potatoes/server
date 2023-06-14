'use strict';

const axios = require('axios');

const recipeHandler = async (req, res) => {
    try {
        const { id } = req.query;
        const url = `http://themealdb.com/api/json/v2/1/lookup.php?i=${id}`;
        const results = await axios.get(url);
        const formattedData = new FormattedResponse(results.data);
        res.status(200).send(formattedData);
    } catch (err) {
        console.error(err);
        res.status(404).send(err.message);
    }
};

module.exports = recipeHandler;

class FormattedResponse {
    constructor(resObj) {
        this.idMeal= resObj.meals[0].idMeal,
        this.strMeal= resObj.meals[0].srtMeal,
        this.strDrinkAlternate= resObj.meals[0].strDrinkAlternate,
        this.strCategory = resObj.meals[0].strCategory,
        this.strArea = resObj.meals[0].strArea,
        this.strInstructions = resObj.meals[0].strInstructions,
        this.strMealThumb = resObj.meals[0].strMealThumb,
        this.strTags= resObj.meals[0].strTags,
        this.strYoutube= resObj.meals[0].strYoutube;
    }

}
