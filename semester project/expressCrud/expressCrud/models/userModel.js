var mongoose = require("mongoose");
let userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

let users = mongoose.model("user", userSchema);
module.exports = users;
