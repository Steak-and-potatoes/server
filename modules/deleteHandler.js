'use strict';
require('dotenv').config();
const recipeModel = require('./modules/recipeModel');




const deleteHandler = async (req, res) => {
    try {
        const { id } = req.query;
        console.log(id);
        await recipeModel.findByIdAndDelete(id);
        res.status(200).send('Recipe Deleted');


    } catch (err) {
        res.status(409).send(err);

    }
};

module.exports = deleteHandler;




