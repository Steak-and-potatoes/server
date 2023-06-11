'use strict';

const axios = require('axios');

const optionsHandler = async (req, res) => {
    try {
        const length = Object.keys(req.query).length;
        if (length === 1) {
            const { ing1 } = req.query;
            console.log('first request triggered',ing1);
            const url = `http://themealdb.com/api/json/v2/${process.env.MEALDB_KEY}/filter.php?i=${ing1}`;
            const results = await axios.get(url);
            res.status(200).send(results.data);
        }
        if (length === 2) {
            const { ing1, ing2 } = req.query;
            console.log('second request triggered', ing1, ing2);
            const url = `http://themealdb.com/api/json/v2/${process.env.MEALDB_KEY}/filter.php?i=${ing1},${ing2}`;
            const results = await axios.get(url);
            res.status(200).send(results.data);
        }
        if (length === 3) {
            const { ing1, ing2, ing3 } = req.query;
            console.log('second request triggerd',ing1, ing2, ing3);
            const url = `http://themealdb.com/api/json/v2/${process.env.MEALDB_KEY}/filter.php?i=${ing1},${ing2},${ing3}`;
            const results = await axios.get(url);
            res.status(200).send(results.data);
        }
    } catch (err) {
        console.error(err);
        res.status(404).send(err.message);
    }
};

module.exports = optionsHandler;
