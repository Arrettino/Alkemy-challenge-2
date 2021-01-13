const createPostsService = require('../../../services/posts/createPosts');

async function createPosts(req, res) {
  const {
    title, content, image, category, creationDate,
  } = req.body;
  const response = await createPostsService({
    title, content, image, category, creationDate,
  });
  res.status(response.status).end();
}

module.exports = createPosts;
