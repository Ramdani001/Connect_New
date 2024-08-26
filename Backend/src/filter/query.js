// Filter Product
const getFacebook = 'SELECT * FROM product WHERE type="Facebook"';
const getInstagram = 'SELECT * FROM product WHERE type="Instagram"';
const getYoutube = 'SELECT * FROM product WHERE type="Youtube"';

module.exports = {
    getFacebook,
    getInstagram,
    getYoutube,
};