const pool = require('../../db');
const queries = require("./query");

const getCount = (req, res) => {
    pool.query(queries.getCount, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};

const getFilteMonth = (req, res) => {
    const date = req.query.date;
    console.log(date);
    
    pool.query(queries.getFilterMonth, [date, date], (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};

const getYear = (req, res) => {
    pool.query(queries.getYear, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};
// Get month
module.exports = {
    getCount,
    getYear,
    getFilteMonth,
};