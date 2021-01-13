const createPostsService = require('../../../services/posts/createPosts');

async function createPosts(req, res) {
  const {
    title, content, image, category, creationdDate,
  } = req.body;
  const response = await createPostsService({
    title, content, image, category, creationdDate,
  });
  res.status(response.status).end();
}

module.exports = createPosts;
