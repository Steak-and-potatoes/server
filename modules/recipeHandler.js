'use strict';

const axios = require('axios');

const recipeHandler = async (req, res) => {
    try {
        const { id } = req.query;
        const url = `http://themealdb.com/api/json/v2/1/lookup.php?i=${id}`;
        const results = await axios.get(url);
        // console.log(results.data.meals[0]);
        const rawData = new FormattedResponse(results.data.meals[0]);
        const formattedData = rawData.returnObj();
        res.status(200).send(formattedData);
    } catch (err) {
        console.error(err);
        res.status(404).send(err.message);
    }
};

module.exports = recipeHandler;

class FormattedResponse {
    constructor(resObj) {
        this.idMeal = resObj.idMeal,
            this.strMeal = resObj.srtMeal,
            this.strCategory = resObj.strCategory,
            this.strArea = resObj.strArea,
            this.strInstructions = resObj.strInstructions,
            this.strMealThumb = resObj.strMealThumb,
            this.strTags = resObj.strTags,
            this.strYoutube = resObj.strYoutube;
            this.rawRecipe = resObj;
            this.ingredients = [];
            // this.measurements = [];
    }
    getArr() {
        let ingredients = [];
        for (let i = 1; i <= 100; i++) {
            const ingredient = this.rawRecipe[`strIngredient${i}`];
            const measurement = this.rawRecipe[`strMeasure${i}`];
            const concatIng = `${measurement} ${ingredient}`; 
            if (ingredient && ingredient !== '' && ingredient !== 'null') {
                ingredients.push(concatIng);
                // if (measurement && measurement.trim() !== '') {
                //     this.measurements.push(measurement);
                // }
            } else {
                break;
            }
        }
        return ingredients;
    }

    returnObj() {
        return {
            idMeal: this.idMeal,
            strMeal: this.strMeal,
            strCategory: this.strCategory,
            strArea: this.strArea,
            strInstructions: this.strInstructions,
            strMealThumb: this.strMealThumb,
            strTags: this.strTags,
            strYoutube: this.strYoutube,
            recipeArr: this.recipeArr,
            ingredients: this.getArr()
        }
    }
}


