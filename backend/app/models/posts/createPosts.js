const PostsModel = require('./PostsModel');

async function createPosts({
  title, content, image, categoriesId, createdAt,
}) {
  await PostsModel.create({
    title,
    content,
    image,
    categoriesId,
    createdAt,
  });
}

module.exports = createPosts;
