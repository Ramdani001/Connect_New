const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getProducts);
router.get("/:id", controller.getProductsById);
router.post("/insert", controller.insertProduct);
router.delete("/:id", controller.deleteProduct);
router.post("/update", controller.updateProducts);

// Filter Product
router.get("/Fac", controller.getFacebook);
router.get("/Inst", controller.getInstagram);
router.get("/You", controller.getYoutube);


module.exports = router;