function categoriesNotFoundError({ categoriesId }) {
  return ({
    status: 404,
    name: 'Category Not Found',
    message: `Category with {categoriesId: ${categoriesId}} Not Found`,
  });
}

module.exports = categoriesNotFoundError;
