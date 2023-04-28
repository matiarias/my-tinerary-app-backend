const City = require("../models/City");
// const personService = require("../services/personService");

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
      let city = await new City({
        country: req.body.country,
        city: req.body.city,
        description: req.body.description,
        image: req.body.image,
      }).save();

      //   let personObtained = await personService.savePerson(
      //     req.body.name,
      //     req.body.lastname,
      //     req.body.age
      //   );

      res.json(city);
    } catch (error) {
      res.json({ error: error });
    }
  },
};

module.exports = controller;
