const mongoose = require("mongoose");
mongoose.pluralize(null);

const categorySchema = new mongoose.Schema({
  Cid: Number,
  Pname: String,
});

module.exports = mongoose.model("Categories", categorySchema);
