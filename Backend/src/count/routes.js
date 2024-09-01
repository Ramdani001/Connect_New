const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getCount);
router.get("/years", controller.getYear);

// Get Month
router.get("/getJan", controller.getJan);
router.get("/getFeb", controller.getFeb);
router.get("/getMarc", controller.getMarc);
router.get("/getApr", controller.getApr);
router.get("/getMay", controller.getMay);
router.get("/getJun", controller.getJun);
router.get("/getJul", controller.getJul);
router.get("/getAug", controller.getAug);
router.get("/getSep", controller.getSep);
router.get("/getOct", controller.getOct);
router.get("/getNov", controller.getNov);
router.get("/getDes", controller.getDes);

module.exports = router; 