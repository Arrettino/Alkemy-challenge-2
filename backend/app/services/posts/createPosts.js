const postsModel = require('../../models/posts');

async function createPosts({
  title,
  content,
  image,
  category,
  creationdDate,
}) {
  await postsModel.createPosts({
    title,
    content,
    image,
    category,
    creationdDate,
  });
  return ({ status: 200 });
}

module.exports = createPosts;
