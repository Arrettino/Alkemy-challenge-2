const findAllPostsService = require('../../../services/posts/findAllPosts');
const { internalError } = require('../../errors');

async function findAllPosts(req, res, next) {
  try {
    const response = await findAllPostsService();
    res.status(response.status).send(response.data);
  } catch (err) {
    next(internalError());
  }
}

module.exports = findAllPosts;
