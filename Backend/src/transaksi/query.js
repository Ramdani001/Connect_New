const getTransaksiById = `SELECT a.id, a.id_trans, a.id_product, b.nama, a.price, a.status, a.created_at
                        FROM transaksi a
                        LEFT JOIN users b ON a.id_user=b.id_user
                        LEFT JOIN product c ON a.id_product=c.id_product
                        WHERE a.id_user=?
                       `; 

const getDet = `SELECT a.id, a.id_trans, c.title, c.type, a.nama_pengirim, a.file, a.price, a.status, a.created_at
                        FROM transaksi a
                        LEFT JOIN users b ON a.id_user=b.id_user
                        LEFT JOIN product c ON a.id_product=c.id_product
                        WHERE a.id=?
                       `; 

const getAll = `SELECT a.id, a.id_trans, c.title, c.type, a.nama_pengirim, a.file, a.price, a.status, a.created_at
                        FROM transaksi a
                        LEFT JOIN users b ON a.id_user=b.id_user
                        LEFT JOIN product c ON a.id_product=c.id_product
                       `; 
const insertTransaksi= "INSERT INTO transaksi(id_trans, id_product, id_user, price, status, payment, nama_pengirim, file, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
const removeTransaksi= "DELETE FROM transaksi WHERE id_product=?";

const getDetail = `SELECT * FROM product WHERE id_product IN (?)`;

const updateCart = `UPDATE cart
                    SET paid = 1
                    WHERE id_product IN (?);
                    `;
 
const updateInsert = `UPDATE transaksi SET status=2, payment=?, nama_pengirim=?, file=? WHERE id=?`;

const update = `UPDATE transaksi SET status=3 WHERE id=?`;

const getCSV = `SELECT 
                    ROW_NUMBER() OVER (ORDER BY a.id_trans) AS no,
                    a.id_trans AS id_transaksi, 
                    c.title AS product_Name, 
                    c.type AS product_Type, 
                    a.nama_pengirim AS Customer,
                    a.price AS price, 
                    a.status AS status
                FROM 
                    transaksi a
                    LEFT JOIN users b ON a.id_user = b.id_user
                    LEFT JOIN product c ON a.id_product = c.id_product;
`;

// const getMonthJan = `SELECT a.id, a.id_trans, c.title, c.type, a.nama_pengirim, a.file, a.price, a.status, a.created_at
//                   FROM transaksi a
//                   LEFT JOIN users b ON a.id_user=b.id_user
//                   LEFT JOIN product c ON a.id_product=c.id_product
//                   WHERE a.created_at BETWEEN DATE('2024-01-01') AND LAST_DAY('2024-1-01')
//                  `;
// const getMonthFeb = `SELECT a.id, a.id_trans, c.title, c.type, a.nama_pengirim, a.file, a.price, a.status, a.created_at
//                   FROM transaksi a
//                   LEFT JOIN users b ON a.id_user=b.id_user
//                   LEFT JOIN product c ON a.id_product=c.id_product
//                   WHERE a.created_at BETWEEN DATE('2024-02-01') AND LAST_DAY('2024-02-01')
//                  `;
// const getMonthMar = `SELECT a.id, a.id_trans, c.title, c.type, a.nama_pengirim, a.file, a.price, a.status, a.created_at
//                   FROM transaksi a
//                   LEFT JOIN users b ON a.id_user=b.id_user
//                   LEFT JOIN product c ON a.id_product=c.id_product
//                   WHERE a.created_at BETWEEN DATE('2024-03-01') AND LAST_DAY('2024-03-01')
//                  `;
// const getMonthApr = `SELECT a.id, a.id_trans, c.title, c.type, a.nama_pengirim, a.file, a.price, a.status, a.created_at
//                   FROM transaksi a
//                   LEFT JOIN users b ON a.id_user=b.id_user
//                   LEFT JOIN product c ON a.id_product=c.id_product
//                   WHERE a.created_at BETWEEN DATE('2024-04-01') AND LAST_DAY('2024-04-01')
//                  `;
// const getMonthMay = `SELECT a.id, a.id_trans, c.title, c.type, a.nama_pengirim, a.file, a.price, a.status, a.created_at
//                   FROM transaksi a
//                   LEFT JOIN users b ON a.id_user=b.id_user
//                   LEFT JOIN product c ON a.id_product=c.id_product
//                   WHERE a.created_at BETWEEN DATE('2024-05-01') AND LAST_DAY('2024-05-01')
//                  `;
// const getMonthJun = `SELECT a.id, a.id_trans, c.title, c.type, a.nama_pengirim, a.file, a.price, a.status, a.created_at
//                   FROM transaksi a
//                   LEFT JOIN users b ON a.id_user=b.id_user
//                   LEFT JOIN product c ON a.id_product=c.id_product
//                   WHERE a.created_at BETWEEN DATE('2024-06-01') AND LAST_DAY('2024-06-01')
//                  `;
// const getMonthJul = `SELECT a.id, a.id_trans, c.title, c.type, a.nama_pengirim, a.file, a.price, a.status, a.created_at
//                   FROM transaksi a
//                   LEFT JOIN users b ON a.id_user=b.id_user
//                   LEFT JOIN product c ON a.id_product=c.id_product
//                   WHERE a.created_at BETWEEN DATE('2024-07-01') AND LAST_DAY('2024-07-01')
//                  `;
// const getMonthAug = `SELECT a.id, a.id_trans, c.title, c.type, a.nama_pengirim, a.file, a.price, a.status, a.created_at
//                   FROM transaksi a
//                   LEFT JOIN users b ON a.id_user=b.id_user
//                   LEFT JOIN product c ON a.id_product=c.id_product
//                   WHERE a.created_at BETWEEN DATE('2024-08-01') AND LAST_DAY('2024-08-01')
//                  `;
// const getMonthSep = `SELECT a.id, a.id_trans, c.title, c.type, a.nama_pengirim, a.file, a.price, a.status, a.created_at
//                   FROM transaksi a
//                   LEFT JOIN users b ON a.id_user=b.id_user
//                   LEFT JOIN product c ON a.id_product=c.id_product
//                   WHERE a.created_at BETWEEN DATE('2024-09-01') AND LAST_DAY('2024-09-01')
//                  `;
// const getMonthOct = `SELECT a.id, a.id_trans, c.title, c.type, a.nama_pengirim, a.file, a.price, a.status, a.created_at
//                   FROM transaksi a
//                   LEFT JOIN users b ON a.id_user=b.id_user
//                   LEFT JOIN product c ON a.id_product=c.id_product
//                   WHERE a.created_at BETWEEN DATE('2024-10-01') AND LAST_DAY('2024-10-01')
//                  `;
// const getMonthNov = `SELECT a.id, a.id_trans, c.title, c.type, a.nama_pengirim, a.file, a.price, a.status, a.created_at
//                   FROM transaksi a
//                   LEFT JOIN users b ON a.id_user=b.id_user
//                   LEFT JOIN product c ON a.id_product=c.id_product
//                   WHERE a.created_at BETWEEN DATE('2024-11-01') AND LAST_DAY('2024-11-01')
//                  `;
// const getMonthDes = `SELECT a.id, a.id_trans, c.title, c.type, a.nama_pengirim, a.file, a.price, a.status, a.created_at
//                   FROM transaksi a
//                   LEFT JOIN users b ON a.id_user=b.id_user
//                   LEFT JOIN product c ON a.id_product=c.id_product
//                   WHERE a.created_at BETWEEN DATE('2024-12-01') AND LAST_DAY('2024-12-01')
//                  `;

module.exports = {
    getTransaksiById,
    insertTransaksi,
    removeTransaksi,
    getDetail,
    updateCart,
    updateInsert,
    getAll,
    getDet,
    update,
    getCSV,
    // getMonthJan,
    // getMonthFeb,
    // getMonthMar,
    // getMonthApr,
    // getMonthMay,
    // getMonthJun,
    // getMonthJul,
    // getMonthAug,
    // getMonthSep,
    // getMonthOct,
    // getMonthNov,
    // getMonthDes,
};