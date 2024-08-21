const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getTransaksi);
router.get("/:id", controller.getTransaksiById);
router.post("/insert", controller.insertTransaksi);
router.delete("/:id", controller.deleteTransaksi);


module.exports = router;