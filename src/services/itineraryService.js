const { Itinerary, City } = require("../models/City");

const { getCityId } = require("./cityService");

let itineraryService = {
  // -------- function para agregar con metodo post ----------
  saveItinerary: async function (
    nameItinerary,
    description,
    author,
    price,
    duration,
    likes,
    hashtags,
    id
  ) {
    let newItinerary = await new Itinerary({
      nameItinerary: nameItinerary,
      description: description,
      author: author,
      price: price,
      duration: duration,
      likes: likes,
      hashtags: hashtags,
      cityId: id,
    }).save();

    let city = await getCityId(id);

    let itineraries = city.itineraries.concat(newItinerary._id);

    let cityUpdate = await City.findOneAndUpdate(
      { _id: id },
      {
        itineraries: itineraries,
      },
      {
        new: true,
      }
    );

    return newItinerary;
  },
};

module.exports = itineraryService;
