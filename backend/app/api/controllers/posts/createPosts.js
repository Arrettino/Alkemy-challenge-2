const createPostsService = require('../../../services/posts/createPosts');
const { categoriesNotFoundError } = require('../../errors');

async function createPosts(req, res, next) {
  const {
    title, content, image, categoriesId, createdAt,
  } = req.body;
  const response = await createPostsService({
    title, content, image, categoriesId, createdAt,
  });
  if (response.status === 200) {
    res.status(response.status).send(response.message);
  } else {
    next(categoriesNotFoundError({ categoriesId }));
  }
}

module.exports = createPosts;
