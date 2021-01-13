async function findPosts(id) {
  const post = { id };
  return ({ status: 200, data: post });
}

module.exports = findPosts;
