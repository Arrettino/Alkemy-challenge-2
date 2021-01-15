/* eslint-disable no-unused-vars */
const config = require('config');
const sequelize = require('./index');
const { createCategories, CategoriesModel } = require('../app/models/categories');

async function resetDatabase() {
  try {
    await sequelize.sync({ force: true });
    const categories = config.get('categories');
    Object.keys(categories).forEach(async (key) => {
      await createCategories(categories[key]);
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = resetDatabase;
