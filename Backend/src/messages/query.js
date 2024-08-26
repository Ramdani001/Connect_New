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
  
const getMessages = `SELECT a.id_m, b.nama, a.stat
                    FROM message a
                    LEFT JOIN users b ON a.id_user=b.id_user
                    `;

const getMessagesById = "SELECT * FROM product WHERE id_product=?";

const insertMessages = "INSERT INTO sub_message (id_m, send_mess, id_user) VALUES (?, ?, ?)";
 
const removeMessages = "DELETE FROM product WHERE id_product=?";
const changeStatusMess = "UPDATE message SET stat=2 WHERE id_m=?";

const getCustMess = `SELECT b.id_m, b.send_mess, b.id_user
                    FROM message a 
                    LEFT JOIN sub_message b ON a.id_m=b.id_m
                    WHERE a.id_user=?`;

// Create New Message
const newInsertMessages = "INSERT INTO message (id_user, stat) VALUES (?, 2)";

 
module.exports = {
    getMessages,
    getMessagesById,
    insertMessages,
    removeMessages,
    changeStatusMess,
    getAllMessages,
    getCustMess,
    newInsertMessages,
};