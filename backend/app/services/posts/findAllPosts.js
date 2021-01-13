const postsModel = require('../../models/posts');

function findAllPosts() {
  const posts = postsModel.findAllPosts();
  return ({ status: 200, data: posts });
}

module.exports = findAllPosts;
