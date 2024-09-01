const pool = require('../../db');
const queries = require("./query");

const getCount = (req, res) => {
    pool.query(queries.getCount, (error, results) => {
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
const getJan = (req, res) => {
    pool.query(queries.getJan, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};
const getFeb = (req, res) => {
    pool.query(queries.getFeb, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};
const getMarc = (req, res) => {
    pool.query(queries.getMarch, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};
const getApr = (req, res) => {
    pool.query(queries.getApr, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};
const getMay = (req, res) => {
    pool.query(queries.getMay, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};
const getJun = (req, res) => {
    pool.query(queries.getJun, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};
const getJul = (req, res) => {
    pool.query(queries.getJul, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};
const getAug = (req, res) => {
    pool.query(queries.getAug, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};
const getSep = (req, res) => {
    pool.query(queries.getSep, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};
const getOct = (req, res) => {
    pool.query(queries.getOct, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};
const getNov = (req, res) => {
    pool.query(queries.getNov, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};
const getDes = (req, res) => {
    pool.query(queries.getDes, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};

module.exports = {
    getCount,
    getYear,
    getJan,
    getFeb,
    getMarc,
    getApr,
    getMay,
    getJun,
    getJul,
    getAug,
    getSep,
    getOct,
    getNov,
    getDes,
};