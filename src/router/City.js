const express = require("express");
const router = express.Router();
const cityController = require("../controllers/cityControllers");
const itineraryController = require("../controllers/itineraryController");

// -------------- rutas para manejar ciudades --------------

router.get("/", cityController.getCities);
router.get("/id/:id", cityController.getCityById);
router.post("/", cityController.addCity);

// -------------- ruta post itinerarios ---------------

router.post("/itinerary", itineraryController.addItinerary);

module.exports = router;
