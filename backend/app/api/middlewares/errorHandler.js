// eslint-disable-next-line no-unused-vars
function errorhandler(error, req, res, next) {
  res.status(500).json({
    status: 500,
    name: 'UnkwnownError',
    message: 'Unkwnown Error',
  });
}

module.exports = errorhandler;
