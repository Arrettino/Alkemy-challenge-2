const postsModel = require('../../models/posts');

async function updatePosts({
  id, title, content, image, categoriesId,
}) {
  const posts = await postsModel.updatePosts({
    id, title, content, image, categoriesId,
  });
  if (posts) {
    return ({ status: 200, message: { status: 'OK' } });
  }
  return ({ status: 400, message: { name: 'posts' } });
}

module.exports = updatePosts;
