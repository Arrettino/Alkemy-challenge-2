const findPostsService = require('../../../services/posts/findPosts');

async function findPosts(req, res) {
  const { id } = req.params;
  const response = await findPostsService(id);
  res.status(response.status).send(response.data);
}

module.exports = findPosts;
