const express = require('express');
const router = express.Router();
const HomeController = require("../controllers/HomeController");

router.get("/", HomeController.showIndex);
router.get("/produtos/:id", HomeController.showOneProduct);
router.get("/trabalheConosco", HomeController.trabalheConosco);
router.get("/sobre", HomeController.sobre);
router.get("/politica", HomeController.politica);
router.get("/promocao" ,HomeController.promocao);
router.get("/timesdorio",HomeController.timesdorio);
router.get("/timesdesaopaulo",HomeController.timesdesaopaulo);


module.exports = router;