const pool = require('../../db');
const queries = require("./query");

const getTrans = (req, res) => {
    pool.query(queries.getAll, (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getAllMonth = (req, res) => {

    const date = req.query.date;
    console.log(date);
    
    pool.query(queries.getAllMonth, [date, date], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getAllDays = (req, res) => {

    const date = req.query.date;
    console.log(date);
    
    pool.query(queries.getAllDays, [date, date], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};
 
const getCSV = (req, res) => {
    pool.query(queries.getCSV, (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getTransaksiById = (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    pool.query(queries.getTransaksiById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getDet = (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    pool.query(queries.getDet, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getDetail = (req, res) => {
    const { numbers } = req.body;
    const idArray = numbers.split(',');
    console.log("Data receive => "+ idArray);
    pool.query(queries.getDetail, [idArray], (error, results) => {
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

const update = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.update, [id], (error, results) => {

        if(error) throw error;
        res.status(200).send("Transaksi Updated successfully");
    });
}

module.exports = {
    getTransaksiById,
    insertTransaksi,
    deleteTransaksi,
    getDetail,
    updateCart,
    updateInsert,
    getTrans,
    getDet,
    update,
    getCSV,
    getAllMonth,
    getAllDays
};
