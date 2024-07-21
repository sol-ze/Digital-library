const Errors = require("./Errors");

class ResponseError extends Error {
  constructor(err) {
    super(err.message);
    this.status = err.status;
  }

  static generateExceptionError(e) {
    e = e || Errors.ERR500;
    const result = new ResponseError({
      status: Errors.ERR500.status,
      message: Errors.ERR500.message,
    });
    return result;
  }
}

module.exports = ResponseError;
