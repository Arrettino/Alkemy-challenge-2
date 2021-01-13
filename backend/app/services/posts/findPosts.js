const postsModel = require('../../models/posts');

async function findPosts(id) {
  const post = await postsModel.findPosts(id);
  return ({ status: 200, data: post });
}

module.exports = findPosts;
