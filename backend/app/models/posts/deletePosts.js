const PostsModel = require('./PostsModel');

async function deletePosts({ id }) {
  const response = await PostsModel.destroy({ where: { id } });
  console.log(response);
  return (response);
}

module.exports = deletePosts;
