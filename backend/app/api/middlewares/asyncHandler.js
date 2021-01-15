const { internalError } = require('../errors');

const asyncHandler = (fn) => (req, res, next) => Promise
  .resolve(fn(req, res, next))
  .catch(next(internalError()));

module.exports = asyncHandler;
