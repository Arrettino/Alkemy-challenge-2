const categoriesModel = require('./CategoriesModel');

async function createCategories(name) {
  await categoriesModel.create({ name });
}

module.exports = createCategories;
