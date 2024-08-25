const pool = require('../../db');
const queries = require("./query");

const getTransaksiById = (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    pool.query(queries.getTransaksiById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getDetail = (req, res) => {
    const { numbers } = req.body;

    pool.query(queries.getDetail, [numbers], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const updateCart = (req, res) => {
    const { numbers } = req.body;

    pool.query(queries.updateCart, [numbers], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};
  
const insertTransaksi = (req, res) => {

    const { id_trans, id_product, id_user, price, status, payment, nama_pengirim, file, created_at } = req.body;
    
    pool.query(queries.insertTransaksi, [id_trans, id_product, id_user, price, status, payment, nama_pengirim, file, created_at], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
}

const updateInsert = (req, res) => {

    const { id, nama_pengirim, payment, file } = req.body;
    
    pool.query(queries.updateInsert, [payment, nama_pengirim, file, id], (error, results) => {
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
    getTransaksiById,
    insertTransaksi,
    deleteTransaksi,
    getDetail,
    updateCart,
    updateInsert,
};