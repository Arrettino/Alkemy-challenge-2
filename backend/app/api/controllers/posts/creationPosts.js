const creationPostsService = require('../../../services/posts/creationPosts');

async function creationPosts(req, res) {
  const {
    title, content, image, category, creationdDate,
  } = req.body;
  const response = await creationPostsService({
    title, content, image, category, creationdDate,
  });
  res.status(response.status).send(response.data);
}

module.exports = creationPosts;
