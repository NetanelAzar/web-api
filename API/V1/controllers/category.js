const Category = require("../models/category");
module.exports = {
  getAllCategory: (req, res) => {
    Category.find().then((data) => {
      return res.status(200).json(data);
    });
  },

  getCategoryById: (req, res) => {
    let Cid = req.params.id;
    Category.findOne({ Cid }).then((data) => {
      return res.status(200).json(data);
    });
  },

  addCategory: (req, res) => {
    let body = req.body;
    Category.insertMany([body]).then((data) => {
      return res.status(200).json(data);
    });
  },
  updateCategory: (req, res) => {
    let Cid = req.params.id;
    let body = req.body;
    Category.updateOne({ Cid }, body).then((data) => {
      return res.status(200).json(data);
    });
  },

  deleteCategory: (req, res) => {
    let Cid = req.params.id;
    Category.deleteOne({ Cid }).then((data) => {
      return res.status(200).json(data);
    });
  },
};
