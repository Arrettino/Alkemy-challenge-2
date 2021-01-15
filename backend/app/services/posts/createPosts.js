const postsModel = require('../../models/posts');
const categoriesModel = require('../../models/categories');

async function createPosts({
  title,
  content,
  image,
  categoriesId,
  createdAt,
}) {
  const response = await categoriesModel.findCategories(categoriesId);
  if (response) {
    await postsModel.createPosts({
      title,
      content,
      image,
      categoriesId,
      createdAt,
    });
    return ({ status: 200, message: { status: 'OK' } });
  }
  return ({ status: 400 });
}

module.exports = createPosts;
