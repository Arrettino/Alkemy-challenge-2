const postsModel = require('../../models/posts');

async function updatePosts({
  id, title, content, image, category,
}) {
  await postsModel.updatePosts({
    id, title, content, image, category,
  });

  return ({ status: 200 });
}

module.exports = updatePosts;
