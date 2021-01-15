const PostsModel = require('./PostsModel');

async function createPosts({
  title, content, image, categoriesId,
}) {
  await PostsModel.create({
    title,
    content,
    image,
    categoriesId,
  });
}

module.exports = createPosts;
