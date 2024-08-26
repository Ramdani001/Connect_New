const pool = require('../../db');
const queries = require("./query");

const getMessages = (req, res) => {
    pool.query(queries.getMessages, (error, results) => {
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

const insertMessages = (req, res) => {

    const { id_m, send_mess, id_user } = req.body;

    pool.query(queries.insertMessages, [id_m, send_mess, id_user], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
}
  
const newInsertMessages = (req, res) => {

    const id_user = parseInt(req.params.id);

    pool.query(queries.newInsertMessages, [id_user], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
}

const deleteMessages = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.removeMessages, [id], (error, results) => {

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
    getMessages,
    getMessagesById,
    insertMessages,
    deleteMessages,
    changeStatusMess,
    getAllMessages,
    getCustMess,
    newInsertMessages,
};