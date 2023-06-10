'use strict';

const axios = require('axios');

const optionsHandler = async (req, res) => {
    try {
        const length = Object.keys(req.query).length;
        if (length === 1) {
            const { ingOne } = req.query;
            console.log(req.query);
            const url = `http://themealdb.com/api/json/v2/1/filter.php?i=${ingOne}`;
            const results = await axios.get(url);
            res.status(200).send(results.data);
        }
        if (length === 2) {
            const { ingOne, ingTwo } = req.query;
            console.log(req.query);
            const url = `http://themealdb.com/api/json/v2/1/filter.php?i=${ingOne},${ingTwo}`;
            const results = await axios.get(url);
            res.status(200).send(results.data);
        }
        if (length === 3) {
            const { ingOne, ingTwo, ingThree } = req.query;
            console.log(req.query);
            const url = `http://themealdb.com/api/json/v2/1/filter.php?i=${ingOne},${ingTwo},${ingThree}`;
            const results = await axios.get(url);
            res.status(200).send(results.data);
        }
    } catch (err) {
        console.error(err);
        res.status(404).send(err.message);
    }
};

module.exports = optionsHandler;
