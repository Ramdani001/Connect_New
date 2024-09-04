// Filter Product
const getFacebook = 'SELECT * FROM product WHERE type="Facebook"';
const getInstagram = 'SELECT * FROM product WHERE type="Instagram"';
const getYoutube = 'SELECT * FROM product WHERE type="Youtube"';
const getTiktok = 'SELECT * FROM product WHERE type="Tiktok"';

module.exports = {
    getFacebook,
    getInstagram,
    getYoutube,
    getTiktok,
};