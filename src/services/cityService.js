const City = require("../models/City");

let cityService = {
  saveCity: async function (country, city, description, image) {
    let newCity = await new City({
      country: country,
      city: city,
      description: description,
      image: image,
    }).save();

    return newCity;
  },
};

module.exports = cityService;
