var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const apiRouter = require("./routes/api");
const Error = require("./module/Errors");
const ResponseError = require("./module/ResponseError");
const errorHandler = require("./middleware/errorHandler");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", apiRouter);
app.disable("x-powered-by");

app.use("*", (req, res, next) => {
  next(new ResponseError(Error.ERR404));
});

app.use(errorHandler);

module.exports = app;
