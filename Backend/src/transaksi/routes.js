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
router.get("/getMonthJan", controller.getMonthJan);
router.get("/getMonthFeb", controller.getMonthFeb);
router.get("/getMonthMar", controller.getMonthMar);
router.get("/getMonthApr", controller.getMonthApr);
router.get("/getMonthMay", controller.getMonthMay);
router.get("/getMonthJun", controller.getMonth6Jun);
router.get("/getMonthJul", controller.getMonthJul);
router.get("/getMonthAug", controller.getMonthAug);
router.get("/getMonthSep", controller.getMonthSep);
router.get("/getMonthOct", controller.getMonthOct);
router.get("/getMonthSep", controller.getMonthSep);
router.get("/getMonthDes", controller.getMonthDes);

module.exports = router;