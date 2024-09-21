const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getCount);
router.get("/years", controller.getYear);
 
router.get("/getFilterMonth", controller.getFilteMonth);

// Get Month

module.exports = router; 