const PostsModel = require('./PostsModel');

async function updatePosts({
  id, title, content, image, categoriesId,
}) {
  const response = await PostsModel.update({
    title, content, image, categoriesId,
  }, {
    where: { id },
  });
  return (response[0]);
}

module.exports = updatePosts;
