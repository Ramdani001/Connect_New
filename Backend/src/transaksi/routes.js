const { Router } = require("express");
const controller = require("./controller");

const router = Router(); 

router.get("/trans", controller.getTrans);

router.get("/getCSV", controller.getCSV);

router.get("/one/:id", controller.getDet);

router.get("/two/:id", controller.update);

router.get("/:id", controller.getTransaksiById);

router.post("/insert", controller.insertTransaksi);

router.delete("/:id", controller.deleteTransaksi);

router.post("/det", controller.getDetail);

router.post("/updateCart", controller.updateCart);
 
router.post("/updateInsert", controller.updateInsert);
 
// Month
router.get("/getMonth1", controller.getMonth1);
router.get("/getMonth2", controller.getMonth2);
router.get("/getMonth3", controller.getMonth3);
router.get("/getMonth4", controller.getMonth4);
router.get("/getMonth5", controller.getMonth5);
router.get("/getMonth6", controller.getMonth6);
router.get("/getMonth7", controller.getMonth7);
router.get("/getMonth8", controller.getMonth8);
router.get("/getMonth9", controller.getMonth9);
router.get("/getMonth10", controller.getMonth10);
router.get("/getMonth11", controller.getMonth11);
router.get("/getMonth12", controller.getMonth12);

module.exports = router;