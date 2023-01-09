var express = require("express");
const users = require("../models/userModel");
var router = express.Router();

/* GET users listing. */
router.get("/register", function (req, res, next) {
  res.render("./users/register");
});
router.post("/register",async function (req, res, next) {
  let user = new users(req.body);
  await user.save();
  res.redirect("/");
});
router.get("/login", function (req, res, next) {
  res.render("./users/login");
});
router.get("/logout" , function(req , res , next){
  req.session.user = null;
  res.redirect("./login");
});
router.post("/login" , async function (req,res,next){
  let user = await users.findOne({email: req.body.email , password: req.body.password,});
  if(!user)return res.redirect("/login");
  req.session.user = user;
  return res.redirect("/");
  });



module.exports = router;
