const findAllPostsService = require('../../../services/posts/findAllPosts');

async function findAllPosts(req, res) {
  const response = await findAllPostsService();
  res.status(response.status).send(response.data);
}

module.exports = findAllPosts;
