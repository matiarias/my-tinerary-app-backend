// const City = require("../models/City");

const cityService = require("../services/cityService");

let controller = {
  getCities: async function (req, res) {
    try {
      let allCities = await cityService.getAllCities();
      res.json(allCities);
    } catch (error) {
      res.json({ error: error });
    }
  },

  getCityById: async function (req, res) {
    const id = req.params.id;

    try {
      let cityId = await cityService.getCityId(id);
      res.json(cityId);
    } catch (error) {
      res.json({ error: error });
    }
  },

  addCity: async function (req, res) {
    try {
      let cityObtained = await cityService.saveCity(
        req.body.country,
        req.body.city,
        req.body.description,
        req.body.image
      );

      res.json(cityObtained);
    } catch (error) {
      res.json({ error: error });
    }
  },
};

module.exports = controller;
