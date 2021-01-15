function validationError({ id }) {
  return ({
    status: 404,
    name: 'Posts Not Found',
    message: `Posts with {id: ${id}} Not Found`,
  });
}

module.exports = validationError;
