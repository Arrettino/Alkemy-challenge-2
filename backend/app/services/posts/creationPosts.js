const postsModel = require('../../models/posts');

async function creationPosts({
  title,
  content,
  image,
  category,
  creationdDate,
}) {
  await postsModel.creationPosts({
    title,
    content,
    image,
    category,
    creationdDate,
  });
  return ({ status: 200 });
}

module.exports = creationPosts;
