const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserScheme = new Schema({
  name: String
});

const User = mongoose.model("user", UserScheme);

module.exports = User;
