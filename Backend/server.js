const express = require("express");
const productRoutes = require('./src/prodcut/routes');
const usersRoutes = require('./src/users/routes');
const transaksiRoutes = require('./src/transaksi/routes');
const messagesRoutes = require('./src/messages/routes');
const cartRoutes = require('./src/cart/routes');
const filterRoutes = require('./src/filter/routes');

const multer = require("multer");
const path = require('path');

const app = express();

const cors = require('cors');
app.use(cors());
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Word!");
});

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        return cb(null, path.join(__dirname, 'public/images/products'));
    },
    filename: function(req, file, cb){
        return cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({storage});

app.post('/upload',upload.single('file'), (req, res) => {
    console.log("Tengah");
    console.log(req.file);
    res.status(200).json(req.file);
});
 
 
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/products/filter', filterRoutes);

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/messages', messagesRoutes);

app.use('/api/v1/cart', cartRoutes);

app.use('/api/v1/transaksi', transaksiRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));

