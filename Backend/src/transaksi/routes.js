const { Router } = require("express");
const controller = require("./controller");

const router = Router(); 

router.get("/trans", controller.getTrans);
router.get("/getAllMonth", controller.getAllMonth);

router.get("/getAllDays", controller.getAllDays);

router.get("/getCSV", controller.getCSV);

router.get("/one/:id", controller.getDet);

router.get("/two/:id", controller.update);
 
router.get("/:id", controller.getTransaksiById);

router.post("/insert", controller.insertTransaksi);

router.delete("/:id", controller.deleteTransaksi);

router.post("/det", controller.getDetail);

router.post("/updateCart", controller.updateCart);

router.post("/updateInsert", controller.updateInsert);

module.exports = router; 