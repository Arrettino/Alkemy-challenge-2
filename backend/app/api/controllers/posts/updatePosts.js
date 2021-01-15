const updatePostsService = require('../../../services/posts/updatePosts');
const { postsNotFoundError, categoriesNotFoundError } = require('../../errors');

async function updatePosts(req, res, next) {
  const {
    title, content, image, categoriesId, creationDate,
  } = req.body;
  const { id } = req.params;
  const response = await updatePostsService({
    id, title, content, image, categoriesId, creationDate,
  });
  if (response.status === 200) {
    return (res.status(response.status).send(response.message));
  }
  if (response.message.name === 'posts') {
    return (next(postsNotFoundError({ id })));
  }

  return (next(categoriesNotFoundError()));
}

module.exports = updatePosts;
