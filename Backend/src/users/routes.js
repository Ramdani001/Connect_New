const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getUsers);

router.post("/regist", controller.addUsers);
router.post("/regist/person", controller.addPerson);

router.post("/check", controller.checkLogin);

router.get("/:id", controller.getUsersById); 

router.delete("/:id", controller.deleteUsers);

module.exports = router; 