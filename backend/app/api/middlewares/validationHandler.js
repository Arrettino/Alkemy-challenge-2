const asyncHandler = require('./asyncHandler');
const { validationError } = require('../errors');

function validationHandler(schema, property) {
  return (
    asyncHandler(
      async (req, res, next) => {
        const { error } = await schema.validate(req[property]);
        if (!error) {
          next();
        } else {
          const details = error.details[0];
          next(validationError({
            message: details.message,
          }));
        }
      },
    )
  );
}
module.exports = validationHandler;
