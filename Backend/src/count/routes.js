const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getCount);
router.get("/years", controller.getYear);

module.exports = router;