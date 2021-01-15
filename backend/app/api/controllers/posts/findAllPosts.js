const findAllPostsService = require('../../../services/posts/findAllPosts');

async function findAllPosts(req, res, next) {
  try {
    const response = await findAllPostsService();
    res.status(response.status).send(response.data);
  } catch (err) {
    next(err);
  }
}

module.exports = findAllPosts;
