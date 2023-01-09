var express = require("express");
var productsModel = require("../models/productsModel");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  let products = await productsModel.find();
  res.render("index", { product: products });
});

router.get("/cart",async function (req, res, next) {
  let cart = req.cookies.cart;
  if (!cart) cart = [];
  res.render("cart", { cart });
});




module.exports = router;
