const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getMessages);
router.get("/:id", controller.getMessagesById);
router.post("/insert", controller.insertMessages);
router.delete("/:id", controller.deleteMessages);

router.get("/stat/:id", controller.changeStatusMess);

router.get("/mess/:id", controller.getAllMessages);
 
router.get("/custSess/:id", controller.getCustMess);

router.get("/cust/:id", controller.getCustMess);

module.exports = router;