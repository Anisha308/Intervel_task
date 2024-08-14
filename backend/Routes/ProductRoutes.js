import express from "express";
import {
  addProduct,
  getProducts,
  getAllProducts,
} from "../Controllers/ProductController.js";
const Router = express.Router();

Router.post("/addProduct", addProduct);
Router.get("/getProducts", getAllProducts);
Router.get("/productDetails/:id", getProducts);
export default Router;
