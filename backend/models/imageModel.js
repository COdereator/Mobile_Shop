const mongoose = require("mongoose");

const BackgroundSchema = new mongoose.Schema({
  imageUrl: String,
  publicId: String
});

module.exports = mongoose.model("Background", BackgroundSchema);