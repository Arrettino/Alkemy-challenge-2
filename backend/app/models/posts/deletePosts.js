const PostsModel = require('./PostsModel');

async function deletePosts({ id }) {
  await PostsModel.destroy({ where: { id } });
}

module.exports = deletePosts;
