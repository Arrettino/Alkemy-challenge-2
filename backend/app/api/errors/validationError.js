function validationError({ message }) {
  return ({
    status: 400,
    name: 'Validation Error',
    message,
  });
}

module.exports = validationError;
