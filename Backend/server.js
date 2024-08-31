const express = require("express");
const productRoutes = require('./src/prodcut/routes');
const usersRoutes = require('./src/users/routes');
const transaksiRoutes = require('./src/transaksi/routes');
const messagesRoutes = require('./src/messages/routes');
const cartRoutes = require('./src/cart/routes');
const filterRoutes = require('./src/filter/routes');
const countRoutes = require('./src/count/routes');

const multer = require("multer");
const path = require('path');
const fs = require('fs');
const app = express();

const cors = require('cors');
app.use(cors());
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Word!");
});

const uploadPath = path.resolve(__dirname, '../../media/connect/images/products');

// Ensure the directory exists
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, uploadPath); // Use the absolute path
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
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

app.use('/api/v1/count', countRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));

