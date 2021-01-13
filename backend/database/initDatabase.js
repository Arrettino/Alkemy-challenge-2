const config = require('config');
const sequelize = require('./index');
const categoriesModel = require('../app/models/categories');
const CategoriesModel = require('../app/models/categories/CategoriesModel');
const PostsModel = require('../app/models/posts/PostsModel');

async function initDatabase() {
  try {
    await sequelize.sync();
    await PostsModel.belongsTo(CategoriesModel, { as: 'categories', foreignKey: 'categoriesId' });
    const response = await categoriesModel.findAllCategories();
    if (!response[0]) {
      const categories = config.get('categories');
      Object.keys(categories).forEach(async (key) => {
        await categoriesModel.createCategories(categories[key]);
      });
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = initDatabase;
