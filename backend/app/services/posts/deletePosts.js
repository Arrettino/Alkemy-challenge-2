const postsModel = require('../../models/posts');

async function deletePosts({ id }) {
  await postsModel.deletePosts({ id });
  return ({ status: 200 });
}

module.exports = deletePosts;
