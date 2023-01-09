var express = require("express");
var productsModel = require("../models/productsModel");
var router = express.Router();
var mongoose = require("mongoose");
var checkSessionAuth = require("../middlewares/checkSessionAuth")

/* GET home page. */
router.get("/", async function (req, res, next) {
  let products = await productsModel.find();
  res.render("products/list", { product: products });
});

router.get("/add", checkSessionAuth , async function (req, res, next) {
  res.render("products/add");
});

router.post("/add", async function (req, res, next) {
  let Product = new productsModel(req.body);
  await Product.save();
  // console.log(Product);
  res.redirect("/products");
  // res.render("products/list", { product: products });
});

router.get("/delete/:id", async function (req, res, next) {
  let products = await productsModel.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});

router.get("/edit/:id", async function (req, res, next) {
  var product = await productsModel.findById(req.params.id);
  res.render("products/edit", { product: product });
});

router.post("/edit/:id", async function (req, res, next) {
  var product = await productsModel.findById(req.params.id);
  product.name = req.body.name;
  product.price = req.body.price;
  await product.save();
  res.redirect("/products");
});

router.get("/cart/:id", async function (req, res, next) {
  let products = await productsModel.findById(req.params.id);
  let cart = [];
  if (req.cookies.cart) cart = req.cookies.cart;
  cart.push(products);
  // console.log(cart);
  res.cookie("cart", cart);
  res.redirect("/products");
});

router.get("/cart/remove/:id", async function (req, res, next) {
  let product = await productsModel.findById(req.params.id);
  // console.log("add to cart" + products);
  let cart = [];
  if (req.cookies.cart) cart = req.cookies.cart;

  // console.log(cart);
  index = cart.findIndex((item) => product._id.equals(item._id));
  // console.log(index);
  cart.splice(index, 1);

  // console.log(cart);
  res.cookie("cart", cart);
  res.redirect("/cart");
});

module.exports = router;
