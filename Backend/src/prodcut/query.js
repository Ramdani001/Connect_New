const getProducts = "SELECT * FROM product";
const getProductsById = "SELECT * FROM product WHERE id_product=?";
const insertProduct = "INSERT INTO product (title, type, price, description, url, file, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
const removeProduct = "DELETE FROM product WHERE id_product=?";

module.exports = {
    getProducts,
    getProductsById,
    insertProduct,
    removeProduct,
};