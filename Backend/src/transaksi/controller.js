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
const getMonth1 = (req, res) => {
    const { numbers } = req.body;

    pool.query(queries.getMonth1, [numbers], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonth2 = (req, res) => {
    const { numbers } = req.body;

    pool.query(queries.getMonth2, [numbers], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonth3 = (req, res) => {
    const { numbers } = req.body;

    pool.query(queries.getMonth3, [numbers], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonth4 = (req, res) => {
    const { numbers } = req.body;

    pool.query(queries.getMonth4, [numbers], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonth5 = (req, res) => {
    const { numbers } = req.body;

    pool.query(queries.getMonth5, [numbers], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonth6 = (req, res) => {
    const { numbers } = req.body;

    pool.query(queries.getMonth6, [numbers], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonth7 = (req, res) => {
    const { numbers } = req.body;

    pool.query(queries.getMonth7, [numbers], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonth8 = (req, res) => {
    const { numbers } = req.body;

    pool.query(queries.getMonth8, [numbers], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonth9 = (req, res) => {
    const { numbers } = req.body;

    pool.query(queries.getMonth9, [numbers], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonth10 = (req, res) => {
    const { numbers } = req.body;

    pool.query(queries.getMonth10, [numbers], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonth11 = (req, res) => {
    const { numbers } = req.body;

    pool.query(queries.getMonth11, [numbers], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const getMonth12 = (req, res) => {
    const { numbers } = req.body;

    pool.query(queries.getMonth12, [numbers], (error, results) => {
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
    getMonth1,
    getMonth2,
    getMonth3,
    getMonth4,
    getMonth5,
    getMonth6,
    getMonth7,
    getMonth8,
    getMonth9,
    getMonth10,
    getMonth11,
    getMonth12,
};