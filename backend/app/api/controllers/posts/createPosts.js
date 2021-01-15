const createPostsService = require('../../../services/posts/createPosts');

async function createPosts(req, res) {
  const {
    title, content, image, categoriesId, createdAt,
  } = req.body;
  const response = await createPostsService({
    title, content, image, categoriesId, createdAt,
  });
  res.status(response.status).send(response.message);
}

module.exports = createPosts;
