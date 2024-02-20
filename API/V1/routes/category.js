const routes = require("express").Router();
const session = require("../middlewares/authSession");

const {
  getAllCategory,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category");

routes.get("/", getAllCategory);
routes.get("/:id", getCategoryById);
routes.post("/", session, addCategory);
routes.patch("/:id", session, updateCategory);
routes.delete("/:id", session, deleteCategory);

module.exports = routes;
