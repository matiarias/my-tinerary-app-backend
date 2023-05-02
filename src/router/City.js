const express = require("express");
const router = express.Router();
const cityController = require("../controllers/cityControllers");

router.get("/", cityController.getCities);
router.post("/", cityController.addCity);

module.exports = router;
