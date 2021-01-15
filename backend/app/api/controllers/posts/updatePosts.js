const updatePostsService = require('../../../services/posts/updatePosts');

async function updatePosts(req, res) {
  const {
    title, content, image, categoriesId, creationDate,
  } = req.body;
  const { id } = req.params;
  const response = await updatePostsService({
    id, title, content, image, categoriesId, creationDate,
  });
  res.status(response.status).end();
}

module.exports = updatePosts;
