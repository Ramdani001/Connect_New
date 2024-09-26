const pool = require('../../db');
const queries = require("./query");

const getCart = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getCart, [id], (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};

const getMessagesById = (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    pool.query(queries.getMessagesById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const insertCart = (req, res) => {

    const { id_product, id_user, paid } = req.body;

    pool.query(queries.insertCart, [id_product, id_user, paid], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
}

const delCart = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.delCart, [id], (error, results) => {

        if(error) throw error;
        res.status(200).send("Messages removed successfully");
    });
}

const delAll = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.delAll, [id], (error, results) => {

        if(error) throw error;
        res.status(200).send("Messages removed successfully");
    });
}

const changeStatusMess = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.changeStatusMess, [id], (error, results) => {

        if(error) throw error;
        res.status(200).send("Stat Change");
    });
}
 
const getAllMessages = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getAllMessages, [id], (error, results) => {

        if(error) throw error;
        res.status(200).send(results);
    });
}
 
const getCustMess = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getCustMess, [id], (error, results) => {

        if(error) throw error;
        res.status(200).send(results);
    });
}
 
module.exports = {
    getCart,
    getMessagesById,
    insertCart,
    delCart,
    changeStatusMess,
    getAllMessages,
    getCustMess,
    delAll,
};