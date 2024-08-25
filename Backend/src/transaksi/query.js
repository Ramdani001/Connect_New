const getTransaksiById = `SELECT a.id, a.id_trans, a.id_product, b.nama, a.price, a.status, a.created_at
                        FROM transaksi a
                        LEFT JOIN users b ON a.id_user=b.id_user
                        LEFT JOIN product c ON a.id_product=c.id_product
                        WHERE a.id_user=?
                       `; 
const insertTransaksi= "INSERT INTO transaksi(id_trans, id_product, id_user, price, status, payment, nama_pengirim, file, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
const removeTransaksi= "DELETE FROM transaksi WHERE id_product=?";

const getDetail = `SELECT * FROM product WHERE id_product IN (?)`;

const updateCart = `UPDATE cart
                    SET paid = 1
                    WHERE id_product IN (?);
                    `;

const updateInsert = `UPDATE transaksi SET status=2, payment=?, nama_pengirim=?, file=? WHERE id=?`;

module.exports = {
    getTransaksiById,
    insertTransaksi,
    removeTransaksi,
    getDetail,
    updateCart,
    updateInsert,
};