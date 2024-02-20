const routes = require("express").Router();
const auth = require("../middlewares/auth");

const {
  getAllProduct,

  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

routes.get("/", getAllProduct);

routes.post("/", addProduct);
routes.patch("/:id", auth, updateProduct);
routes.delete("/:id", auth, deleteProduct);

module.exports = routes;
