const City = require("../models/City");

const cityService = require("../services/cityService");

let controller = {
  getCity: async function (req, res) {
    try {
      let city = await City.find();
      res.json(city);
    } catch (error) {
      res.json({ error: error });
    }
  },

  addCity: async function (req, res) {
    try {
      // let city = await new City({
      //   country: req.body.country,
      //   city: req.body.city,
      //   description: req.body.description,
      //   image: req.body.image,
      // }).save();

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
