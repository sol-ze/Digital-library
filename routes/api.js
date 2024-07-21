var express = require("express");
var router = express.Router();
const booksRouter = require("./api/books");
const errorHandler = require("../middleware/errorHandler");
const ResponseError = require("../module/ResponseError");
const Error = require("../module/Errors");

// GET /api
router.get("/", function (req, res, next) {
  try {
    res.status(Error.ERR404.status).json({ message: Error.ERR404.message });
  } catch (err) {
    logger.error(err);
    next(ResponseError(Error.ERR404));
  }
});

// books router
router.use("/books", booksRouter);

router.use(errorHandler);

module.exports = router;
