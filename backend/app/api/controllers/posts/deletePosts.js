const deletePostsService = require('../../../services/posts/deletePosts');
const { postsNotFoundError } = require('../../errors');

async function createPosts(req, res, next) {
  const { id } = req.params;
  const response = await deletePostsService({ id });
  if (response.database) {
    res.status(response.status).send(response.message);
  } else {
    next(postsNotFoundError({ id }));
  }
}

module.exports = createPosts;
