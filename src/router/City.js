const express = require("express");
const router = express.Router();
const cityController = require("../controllers/cityControllers");

router.get("/", cityController.getCities);
router.get("/id/:id", cityController.getCityById);
router.post("/", cityController.addCity);

module.exports = router;
