const itineraryService = require("../services/itineraryService");

let itineraryController = {
  addItinerary: async function (req, res) {
    try {
      let itinerary = await itineraryService.saveItinerary(
        req.body.nameItinerary,
        req.body.description,
        req.body.author,
        req.body.price,
        req.body.duration,
        req.body.likes,
        req.body.hashtags,
        req.body.id
      );

      res.json(itinerary);
    } catch (error) {
      res.json({ error: error });
    }
  },
};

module.exports = itineraryController;
