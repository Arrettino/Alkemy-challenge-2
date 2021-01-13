const PostsModel = require('./PostsModel');

async function createPosts({
  title, content, image, category,
}) {
  await PostsModel.create({
    title,
    content,
    image,
    categoriesId: category,
  });
}

module.exports = createPosts;
