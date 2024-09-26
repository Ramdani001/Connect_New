const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// router.get("/:id", controller.getCart);

router.get("/:id", controller.getCart);
router.post("/add", controller.insertCart);
router.delete("/del/:id", controller.delCart);
router.delete("/delCart/:id", controller.delAll);


// router.get("/stat/:id", controller.changeStatusMess);

// router.get("/mess/:id", controller.getAllMessages);
 
// router.get("/custSess/:id", controller.getCustMess);

// router.get("/cust/:id", controller.getCustMess);

module.exports = router;