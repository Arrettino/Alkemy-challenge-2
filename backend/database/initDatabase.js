const config = require('config');
const sequelize = require('./index');
const { findAllCategories, createCategories, CategoriesModel } = require('../app/models/categories');
const PostsModel = require('../app/models/posts/PostsModel');

async function initDatabase() {
  try {
    await sequelize.sync();
    await PostsModel.belongsTo(CategoriesModel, { as: 'categories', foreignKey: 'categoriesId' });
    const response = await findAllCategories();
    if (!response[0]) {
      const categories = config.get('categories');
      Object.keys(categories).forEach(async (key) => {
        await createCategories(categories[key]);
      });
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = initDatabase;
