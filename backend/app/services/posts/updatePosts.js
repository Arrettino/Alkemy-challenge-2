const postsModel = require('../../models/posts');
const categoriesModel = require('../../models/categories');

async function updatePosts({
  id, title, content, image, categoriesId,
}) {
  const response = await categoriesModel.findCategories(categoriesId);
  if (response) {
    const posts = await postsModel.updatePosts({
      id, title, content, image, categoriesId,
    });
    if (posts) {
      return ({ status: 200, message: { status: 'OK' } });
    }
    return ({ status: 400, message: { name: 'posts' } });
  }
  return ({ status: 400, message: { name: 'categories' } });
}

module.exports = updatePosts;
