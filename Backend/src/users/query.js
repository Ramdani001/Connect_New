const getUsers = "SELECT * FROM users";
const getUsersById = "SELECT * FROM users WHERE id_user=?";
const checkEmailExists = "SELECT * FROM users WHERE email=?";
const addUsers = "INSERT INTO users (email, username, password, tipe, nama, no_telp, alamat, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

const addPerson = "INSERT INTO person (id_user, id_product, name, no_telp, alamat) VALUES (?, ?, ?, ?, ?)";

const removeUsers = "DELETE FROM users WHERE id_user=?";

module.exports = {
    checkEmailExists,
    getUsers,
    getUsersById,
    addUsers,
    removeUsers,
    addPerson,
};