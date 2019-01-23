const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FilmaSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  ratings: {
    type: String
  },
  quality: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", FilmaSchema);
