const pool = require('../../db');
const queries = require("./query");

const getCount = (req, res) => {
    pool.query(queries.getCart, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};

module.exports = {
    getCount,
};