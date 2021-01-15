const PostsModel = require('./PostsModel');

async function updatePosts({
  id, title, content, image, categoriesId,
}) {
  await PostsModel.update({
    title, content, image, categoriesId,
  }, {
    where: { id },
  });
}

module.exports = updatePosts;
