const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getCount);
router.get("/years", controller.getYear);
 req.params.id
router.get("/getFilterMonth/:id", controller.getFilterMonth);

router.get("/getFilterDays/:days", controller.getFilterDays);

// Get Month

module.exports = router; 