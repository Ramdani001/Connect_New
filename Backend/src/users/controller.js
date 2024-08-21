const pool = require('../../db');
const queries = require("./query");

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};
 
const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    pool.query(queries.getUsersById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const addUsers = (req, res) => {
    const { email, username, password, tipe,nama, no_telp, alamat, created_at, updated_at } = req.body;

    if (!email) {
        return res.status(400).send("Email is required");
    }

    // check email exist
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        // res.send(results)
        if(results.length > 0){
            res.status(300).send("Email ada");
            console.log("Gagal menambahkan akun");
        }else{
            pool.query(queries.addUsers, [email, username, password, tipe, nama, no_telp, alamat, created_at, updated_at], (error, results) => {
                if(error) throw error;

                res.status(200).send("Register Succesfully");
                console.log("Berhasil menambahkan akun");
            });
        }
        
    });
}

const addPerson = (req, res) => {
    const {id_user} = req.body;

    pool.query(queries.addPerson, [id_user], (error, results) => {
        if(error) throw error;

        res.status(200).send(results);
        console.log("Id User berhasil ditambahkan di table person");

    })
}

const deleteUsers = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.removeUsers, [id], (error, results) => {

        if(error) throw error;
        res.status(200).send("Users removed successfully");
    });
}

const checkLogin = (req, res) => {

    const { email, password } = req.body;

    pool.query(queries.checkEmailExists, [email], (error, results) => {
        
        if(results.length > 0){
            res.status(200).send(results);
            console.log("Email Ada");
        }else{
            res.status(300).send("Email atau password salah!!");
        }
        
    });
}

module.exports = {
    getUsers,
    getUsersById,
    addUsers,
    deleteUsers,
    checkLogin,
    addPerson,
};