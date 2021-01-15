const PostsModel = require('./PostsModel');
const { CategoriesModel } = require('../categories');

async function findPosts(id) {
  const response = await PostsModel.findByPk(id, {
    include: [
      {
        model: CategoriesModel,
        attributes: ['name'],
        as: 'categories',
      },
    ],
    attributes: ['id', 'title', 'content', 'image', 'createdAt'],
  });
  return (response);
}

module.exports = findPosts;
