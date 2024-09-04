const { Router } = require("express");
const controller = require("./controller");

const router = Router();
  
// Filter Product
router.get("/Fac", controller.getFacebook);
router.get("/Inst", controller.getInstagram);
router.get("/You", controller.getYoutube);
router.get("/Tik", controller.getTiktok);

 
module.exports = router;