const mysql = require("mysql");

module.exports = {
  getAllProduct: (req, res) => {
    const conn = global.db;
    conn.query("SELECT * FROM t_products", function (error, results, fields) {
      if (error) {
        return res.status(500).json(error);
      } else {
        return res.status(200).json(results);
      }
    });
  },
  getProductById: (req, res) => {
    let Pid = req.params.id;
    const conn = global.db;
    conn.query(
      "SELECT * FROM t_products WHERE pid = ? ",
      Pid,
      function (error, results, fields) {
        if (error) {
          return res.status(500).json(error);
        } else {
          return res.status(200).json(results);
        }
      }
    );
  },

  addProduct: (req, res) => {
    const conn = global.db;
    let body = req.body;
    conn.query(
      "INSERT INTO t_products SET ?",
      body,
      function (error, results, fields) {
        if (error) {
          return res.status(500).json(error);
        } else {
          return res.status(200).json(results);
        }
      }
    );
  },

  updateProduct: (req, res) => {
    const conn = global.db;
    let Pid = req.params.id;
    let body = req.body;
    conn.query(
      "UPDATE t_products SET ? WHERE pid = ?",
      [body, Pid],
      function (error, results, fields) {
        if (error) {
          return res.status(500).json(error);
        } else {
          return res.status(200).json(results);
        }
      }
    );
  },

  deleteProduct: (req, res) => {
    const conn = global.db;
    conn.query(
      "DELETE FROM t_products WHERE pid = ?",
      productId,
      function (error, results, fields) {
        if (error) {
          return res.status(500).json(error);
        } else {
          return res.status(200).json(results);
        }
      }
    );
  },
};

const newProduct = {
  pid: null,
  pname: "age",
  price: 50,
  picname: "age.jpg",
  pdes: null,
};
