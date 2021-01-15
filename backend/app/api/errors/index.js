const internalError = require('./internalError');
const validationError = require('./validationError');
const postsNotFoundError = require('./postsNotFoundError');
const categoriesNotFoundError = require('./categoriesNotFoundError');

module.exports = {
  internalError,
  validationError,
  postsNotFoundError,
  categoriesNotFoundError,
};
