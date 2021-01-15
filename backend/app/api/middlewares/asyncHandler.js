const { internalError } = require('../errors');

function asyncHandler(fn) {
  return (
    async (req, res, next) => {
      try {
        await fn(req, res, next);
      } catch (err) {
        next(internalError());
      }
    }
  );
}

module.exports = asyncHandler;
