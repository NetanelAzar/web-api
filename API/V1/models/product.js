const mongoose = require("mongoose");
mongoose.pluralize(null);

const productSchema = new mongoose.Schema({
  Pid: Number,
  Cid: Number,
  Pname: String,
  Price: Number,
  PicName: String,
});

module.exports = mongoose.model("Products", productSchema);
