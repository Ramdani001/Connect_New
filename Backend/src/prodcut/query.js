const getProducts = "SELECT * FROM product";
const getProductsById = "SELECT * FROM product WHERE id_product=?";
const insertProduct = "INSERT INTO product (title, type, price, description, url, file, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
const removeProduct = "DELETE FROM product WHERE id_product=?";
const updateProducts = 'UPDATE product SET title=?, type=?, price=?, description=?, url=?, file=?, updated_at=? WHERE id_product=?';

// Filter Product
const getFacebook = 'SELECT * FROM product WHERE type="Facebook"';
const getInstagram = 'SELECT * FROM product WHERE type="Instagram"';
const getYoutube = 'SELECT * FROM product WHERE type="Youtube"';

module.exports = {
    getProducts,
    getProductsById,
    insertProduct,
    removeProduct,
    getFacebook,
    getInstagram,
    getYoutube,
    updateProducts,
};