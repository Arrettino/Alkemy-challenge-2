const categoriesModel = require('./CategoriesModel');

async function findAllCategories() {
  const response = await categoriesModel.findAll();
  return response;
}

module.exports = findAllCategories;
