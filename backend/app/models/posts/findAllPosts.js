const PostsModel = require('./PostsModel');
const CategoriesModel = require('../categories/CategoriesModel');

async function findAllPosts() {
  const response = await PostsModel.findAll({
    raw: true,
    nest: true,
    include: [
      {
        model: CategoriesModel,
        attributes: ['id', 'name'],
        as: 'categories',
      },
    ],
    attributes: ['id', 'title', 'image', 'createdAt'],
    order: [
      ['createdAt', 'DESC'],
    ],
  });
  return (response);
}

module.exports = findAllPosts;
