const express = require("express");
const productRoutes = require('./src/prodcut/routes');
const usersRoutes = require('./src/users/routes');
const transaksiRoutes = require('./src/transaksi/routes');
const messagesRoutes = require('./src/messages/routes');

const multer = require("multer");


const app = express();

app.use((req, res, next) => {
    // Mengatur header Referrer-Policy
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Mengatur header CORS
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Update sesuai dengan domain asal yang akan membuat permintaan
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Menangani preflight request untuk OPTIONS method
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204); // No Content
    }

    next();
});
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Word!");
});

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        return cb(null, "../public/images/products");
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
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/transaksi', transaksiRoutes);
app.use('/api/v1/messages', messagesRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));

