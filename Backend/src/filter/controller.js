const pool = require('../../db');
const queries = require("./query");

// Filter Product
const getFacebook = (req, res) => {
    pool.query(queries.getFacebook, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};

const getInstagram = (req, res) => {
    pool.query(queries.getInstagram, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};

const getYoutube = (req, res) => {
    pool.query(queries.getYoutube, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};

module.exports = {
    getFacebook,
    getInstagram,
    getYoutube,
};