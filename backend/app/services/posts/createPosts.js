const postsModel = require('../../models/posts');

async function createPosts({
  title,
  content,
  image,
  categoriesId,
  creationdDate,
}) {
  await postsModel.createPosts({
    title,
    content,
    image,
    categoriesId,
    creationdDate,
  });
  return ({ status: 200, message: { status: 'OK' } });
}

module.exports = createPosts;
