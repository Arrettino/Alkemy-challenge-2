const createPostsService = require('../../../services/posts/createPosts');

async function createPosts(req, res) {
  const {
    title, content, image, categoriesId, creationDate,
  } = req.body;
  const response = await createPostsService({
    title, content, image, categoriesId, creationDate,
  });
  res.status(response.status).send(response.message);
}

module.exports = createPosts;
