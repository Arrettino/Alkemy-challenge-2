const deletePostsService = require('../../../services/posts/deletePosts');

async function createPosts(req, res) {
  const { id } = req.params;
  const response = await deletePostsService({ id });
  res.status(response.status).send(response.data);
}

module.exports = createPosts;
