const Product = require("../models/product");
module.exports = {
  getAllProduct: (req, res) => {
    Product.find().then((data) => {
      return res.status(200).json(data);
    });
  },

  getProductById: (req, res) => {
    let Pid = req.params.id;
    Product.findOne({ Pid }).then((data) => {
      return res.status(200).json(data);
    });
  },

  addProduct: (req, res) => {
    let body = req.body;
    Product.insertMany([body]).then((data) => {
      if (req.session.user == undefined) {
        return res.status(401).json({ msg: "not good" });
      }
      return res.status(200).json(data);
    });
  },

  updateProduct: (req, res) => {
    let Pid = req.params.id;
    let body = req.body;
    Product.updateOne({ Pid }, body).then((data) => {
      return res.status(200).json(data);
    });
  },

  deleteProduct: (req, res) => {
    let Pid = req.params.id;
    Product.deleteOne({ Pid }).then((data) => {
      return res.status(200).json(data);
    });
  },
};
