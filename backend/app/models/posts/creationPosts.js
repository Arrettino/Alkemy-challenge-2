const PostsModel = require('./PostsModel');

async function creationPosts({
  title, content, image, category,
}) {
  await PostsModel.create({
    title,
    content,
    image,
    categoriesId: category,
  });
}

module.exports = creationPosts;
