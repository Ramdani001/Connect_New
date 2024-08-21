const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getProducts);
router.get("/:id", controller.getProductsById);
router.post("/insert", controller.insertProduct);
router.delete("/:id", controller.deleteProduct);
module.exports = router;