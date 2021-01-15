const updatePostsService = require('../../../services/posts/updatePosts');
const { postsNotFoundError } = require('../../errors');

async function updatePosts(req, res, next) {
  const {
    title, content, image, categoriesId, creationDate,
  } = req.body;
  const { id } = req.params;
  const response = await updatePostsService({
    id, title, content, image, categoriesId, creationDate,
  });
  if (response.database) {
    res.status(response.status).send(response.message);
  } else {
    next(postsNotFoundError({ id }));
  }
}

module.exports = updatePosts;
