var mongoose = require("mongoose");
let productSchema = mongoose.Schema({
  name: String,
  price: String,
});

let express = mongoose.model("express", productSchema,"express");
module.exports = express;
