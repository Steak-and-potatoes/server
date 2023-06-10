'use strict';

const axios = require('axios');

const recipeHandler = async (req, res) => {
    try {
        const { id } = req.query;
        const url = `http://themealdb.com/api/json/v2/1/lookup.php?i=${id}`;
        const results = await axios.get(url);
        res.status(200).send(results.data);
    } catch (err) {
        console.error(err);
        res.status(404).send(err.message);
    }
};

module.exports = recipeHandler;

class formattedResponse