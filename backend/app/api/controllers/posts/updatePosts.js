const updatePostsService = require('../../../services/posts/updatePosts');

async function updatePosts(req, res) {
  const {
    title, content, image, category, creationDate,
  } = req.body;
  const { id } = req.params;
  const response = await updatePostsService({
    id, title, content, image, category, creationDate,
  });
  res.status(response.status).send(response.data);
}

module.exports = updatePosts;
