const getPTransaksi = `SELECT a.id, a.id_trans, b.nama, c.id_product
                       FROM transaksi a
                       LEFT JOIN users b ON a.id_user=b.id_user
                       LEFT JOIN product c ON a.id_product=c.id_product
                       `;
const getPTransaksiById = "SELECT * FROM product WHERE id_product=?";
const insertTransaksi= "INSERT INTO Transaksi(title, type, price, description, url, file, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
const removeTransaksi= "DELETE FROM TransaksiWHERE id_product=?";

module.exports = {
    getPTransaksi,
    getPTransaksiById,
    insertTransaksi,
    removeTransaksi,
};