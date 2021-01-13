const servicesPosts = require('../../../services/posts');

function getPosts(req, res) {
  const response = servicesPosts.getPosts();
  res.status(response.status).send(response.data);
}

module.exports = getPosts;
