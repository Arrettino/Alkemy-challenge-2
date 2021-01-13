const postsModel = require('../../models/posts');

async function findAllPosts() {
  const posts = await postsModel.findAllPosts();
  return ({ status: 200, data: posts });
}

module.exports = findAllPosts;
