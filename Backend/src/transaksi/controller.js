const pool = require('../../db');
const queries = require("./query");

const getTrans = (req, res) => {
    pool.query(queries.getAll, (error, results) => {
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

const update = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.update, [id], (error, results) => {

        if(error) throw error;
        res.status(200).send("Transaksi Updated successfully");
    });
}

// Get Data By Month
const getMonthJan = (req, res) => {

    pool.query(queries.getMonthJan, (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonthFeb = (req, res) => {

    pool.query(queries.getMonthFeb, (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonthMar = (req, res) => {

    pool.query(queries.getMonthMar, (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonthApr = (req, res) => {

    pool.query(queries.getMonthApr, (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonthMay = (req, res) => {

    pool.query(queries.getMonthMay, (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonthJun = (req, res) => {

    pool.query(queries.getMonthJun, (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonthJul = (req, res) => {

    pool.query(queries.getMonthJul, (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonthAug = (req, res) => {

    pool.query(queries.getMonthAug, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};

const getMonthSep = (req, res) => {

    pool.query(queries.getMonthSep, (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonthOct = (req, res) => {

    pool.query(queries.getMonthOct, (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonthNov = (req, res) => {

    pool.query(queries.getMonthNov, (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonthDes = (req, res) => {

    pool.query(queries.getMonthDes, (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};


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
    getMonthJan,
    getMonthFeb,
    getMonthMar,
    getMonthApr,
    getMonthMay,
    getMonthJun,
    getMonthJul,
    getMonthAug,
    getMonthSep,
    getMonthOct,
    getMonthNov,
    getMonthDes,
};