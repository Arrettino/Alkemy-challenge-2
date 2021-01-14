const PostsModel = require('./PostsModel');

async function updatePosts({
  id, title, content, image, category,
}) {
  await PostsModel.update({
    title, content, image, categoriesId: category,
  }, {
    where: { id },
  });
}

module.exports = updatePosts;
