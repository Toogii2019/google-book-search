const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  onlineId:  {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
},

);

const BooksCollection = mongoose.model("BooksCollection", BooksSchema);

module.exports = BooksCollection;