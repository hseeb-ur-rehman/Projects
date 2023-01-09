console.clear();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var productsRouter = require("./routes/products");
var users = require("./routes/users");
var session = require("express-session")
var sessionAuth = require("./middlewares/sessionAuth")

var app = express();
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 6000000 }
}))

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(sessionAuth)

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'dummytext',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/", users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://0.0.0.0:27017/expressCrud")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
