'use strict';
require('dotenv').config();
const axios = require('axios');

const MONGODB_KEY = process.env.MONGODB_KEY;


const deleteHandler = async (req) => {
    try {
        const { id } = req.query;
        await axios.delete(MONGODB_KEY).deleteOne({_id:id});
    } catch (err) {
        console.error(err);
    }
};

module.exports = deleteHandler;




