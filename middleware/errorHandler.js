const errorHandler = (err, req, res, next) => {
  const json = { message: err.message, status: err.status };

  res.status(err.status).json(json);
};

module.exports = errorHandler;
