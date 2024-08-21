const pool = require('../../db');
const queries = require("./query");

const getTransaksi = (req, res) => {
    pool.query(queries.getPTransaksi, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};

const getTransaksiById = (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    pool.query(queries.getProductsById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const insertTransaksi = (req, res) => {

    const { title, type, price, description, url, file, created_at, updated_at } = req.body;

    pool.query(queries.insertProduct, [title, type, price, description, url, file, created_at, updated_at], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
}
const deleteTransaksi = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.removeProduct, [id], (error, results) => {

        if(error) throw error;
        res.status(200).send("Product removed successfully");
    });
}
module.exports = {
    getTransaksi,
    getTransaksiById,
    insertTransaksi,
    deleteTransaksi,
};