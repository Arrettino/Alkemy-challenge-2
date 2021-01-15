const postsModel = require('../../models/posts');

async function createPosts({
  title,
  content,
  image,
  categoriesId,
  createdAt,
}) {
  await postsModel.createPosts({
    title,
    content,
    image,
    categoriesId,
    createdAt,
  });
  return ({ status: 200, message: { status: 'OK' } });
}

module.exports = createPosts;
