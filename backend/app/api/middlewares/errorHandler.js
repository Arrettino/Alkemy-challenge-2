// eslint-disable-next-line no-unused-vars
function errorhandler(error, req, res, next) {
  res.status(error.status).json(error);
}

module.exports = errorhandler;
