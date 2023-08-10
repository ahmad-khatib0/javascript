class AppError extends Error {
  constructor(message, statusCode) {
    super(message); //because its the only parameter that built-in Error accept (so here like calling Error)
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error ';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = AppError;
