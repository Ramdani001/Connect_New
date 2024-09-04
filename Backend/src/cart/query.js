const getAllMessages = `SELECT 
                        a.id_user,
                        d.nama AS Cust, 
                        b.nama AS head_mess, 
                        a.send_mess
                    FROM 
                        sub_message a
                        LEFT JOIN users b ON a.id_user = b.id_user
                        LEFT JOIN message c ON a.id_m = c.id_m
                        INNER JOIN users d ON c.id_user = d.id_user
                        WHERE a.id_m=?
                     `;
 
const getCart = `SELECT a.id_product, 
                    MIN(a.id_cart) AS id_cart,
                    MIN(c.title) AS title, 
                    MIN(c.price) AS price, 
                    MIN(c.description) AS description
                FROM cart a
                LEFT JOIN users b ON a.id_user = b.id_user
                LEFT JOIN product c ON a.id_product = c.id_product
                WHERE b.id_user=? AND a.paid=2
                GROUP BY a.id_product
                ORDER BY a.id_product;
`;

const getMessagesById = "SELECT * FROM product WHERE id_product=?";

const insertCart = "INSERT INTO cart (id_product, id_user, paid) VALUES (?, ?, ?)";

const delCart = "DELETE FROM cart WHERE id_cart=?";
const changeStatusMess = "UPDATE message SET stat=2 WHERE id_m=?";

const getCustMess = `SELECT b.id_m, b.send_mess, b.id_user
                    FROM message a 
                    LEFT JOIN sub_message b ON a.id_m=b.id_m
                    WHERE a.id_user=?`;

module.exports = {
    getCart,
    getMessagesById,
    insertCart,
    delCart,
    changeStatusMess,
    getAllMessages,
    getCustMess,
};