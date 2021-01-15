const findPostsService = require('../../../services/posts/findPosts');
const { postsNotFoundError } = require('../../errors');

async function findPosts(req, res, next) {
  const { id } = req.params;
  const response = await findPostsService(id);
  if (response.data) {
    res.status(response.status).send(response.data);
  } else {
    next(postsNotFoundError({ id }));
  }
}

module.exports = findPosts;
