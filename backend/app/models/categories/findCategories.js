const categoriesModel = require('./CategoriesModel');

async function findCategories(id) {
  const response = await categoriesModel.findByPk(id);
  return response;
}

module.exports = findCategories;
