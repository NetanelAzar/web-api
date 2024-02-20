const mongoose = require("mongoose");
mongoose.pluralize(null);

const userSchema = new mongoose.Schema({
  userId: Number,
  fullName: String,
  email: String,
  pass: String,
  phone: String,
});

module.exports = mongoose.model("Users", userSchema);
