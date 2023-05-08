const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CitySchema = new Schema({
  country: String,
  city: String,
  description: String,
  image: String,
  itineraries: [
    { type: Schema.Types.ObjectId, ref: "Itinerary", autopopulate: true },
  ],
});

const ItinerarySchema = new Schema({
  nameItinerary: String,
  description: String,
  author: String,
  price: Number,
  duration: String,
  likes: Number,
  hashtags: Array,
  cityId: { type: Schema.Types.ObjectId, ref: "City", autopopulate: false },
});

CitySchema.plugin(require("mongoose-autopopulate"));
ItinerarySchema.plugin(require("mongoose-autopopulate"));

const City = mongoose.model("City", CitySchema);

const Itinerary = mongoose.model("Itinerary", ItinerarySchema);

module.exports = {
  City,
  Itinerary,
};
