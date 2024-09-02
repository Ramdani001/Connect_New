const pool = require('../../db');
const queries = require("./query");

const getProducts = (req, res) => {
    pool.query(queries.getProducts, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};

const getProductsById = (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    pool.query(queries.getProductsById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const updateProducts = (req, res) => {

    const { title, type, price, description, url, file, updated_at, id_product } = req.body;

    pool.query(queries.updateProducts, [title, type, price, description, url, file, updated_at, id_product], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
}

const insertProduct = (req, res) => {

    const { title, type, price, description, url, file, created_at, updated_at } = req.body;

    pool.query(queries.insertProduct, [title, type, price, description, url, file, created_at, updated_at], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
}

const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
 
    pool.query(queries.removeProduct, [id], (error, results) => {

        if(error) throw error;
        res.status(200).send("Product removed successfully");
    });
}

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
    getProducts,
    getProductsById,
    insertProduct,
    deleteProduct,
    getFacebook,
    getInstagram,
    getYoutube,
    updateProducts,
};