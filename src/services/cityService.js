const City = require("../models/City");

let cityService = {
  // ---- function para agregar con metodo post ----------
  saveCity: async function (country, city, description, image) {
    let newCity = await new City({
      country: country,
      city: city,
      description: description,
      image: image,
    }).save();

    return newCity;
  },

  // -------- function para obtener ciudad con id con el metodo get ------------

  getCityId: async function (id) {
    let city = await City.findById(id);
    return city;
  },
};

module.exports = cityService;
