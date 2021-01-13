const PostsModel = require('./PostsModel');
const { CategoriesModel } = require('../categories');

async function findPosts(id) {
  const response = await PostsModel.findByPk(id, {
    include: [
      {
        model: CategoriesModel,
        as: 'categories',
      },
    ],
  });
  return (response);
}

module.exports = findPosts;
