const PostsModel = require('./PostsModel');
const CategoriesModel = require('../categories/CategoriesModel');

async function findAllPosts() {
  const response = await PostsModel.findAll({
    include: [
      {
        model: CategoriesModel,
        as: 'categories',
      },
    ],
  });
  return (response);
}

module.exports = findAllPosts;
