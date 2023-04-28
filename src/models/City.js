const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const City = new Schema({
  country: String,
  city: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("City", City);
