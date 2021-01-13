const servicesPosts = require('../../../services/posts');

async function getPosts(req, res) {
  const response = await servicesPosts.getPosts();
  res.status(response.status).send(response.data);
}

module.exports = getPosts;
