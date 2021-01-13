const findAllPosts = require('../../../services/posts/findAllPosts');

async function getPosts(req, res) {
  const response = await findAllPosts();
  res.status(response.status).send(response.data);
}

module.exports = getPosts;
