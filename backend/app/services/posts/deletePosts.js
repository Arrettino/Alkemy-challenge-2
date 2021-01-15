const postsModel = require('../../models/posts');

async function deletePosts({ id }) {
  const response = await postsModel.deletePosts({ id });
  return ({ status: 200, message: { status: 'OK' }, database: response });
}

module.exports = deletePosts;
