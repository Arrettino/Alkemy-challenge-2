const updatePostsService = require('../../../services/posts/updatePosts');

async function updatePosts(req, res) {
  const {
    title, content, image, category, creationdDate,
  } = req.body;
  const response = await updatePostsService({
    title, content, image, category, creationdDate,
  });
  res.status(response.status).send(response.data);
}

module.exports = updatePosts;
