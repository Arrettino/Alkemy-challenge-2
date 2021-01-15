const postsModel = require('../../models/posts');

async function updatePosts({
  id, title, content, image, categoriesId,
}) {
  const response = await postsModel.updatePosts({
    id, title, content, image, categoriesId,
  });

  return ({ status: 200, message: { status: 'OK' }, database: response });
}

module.exports = updatePosts;
