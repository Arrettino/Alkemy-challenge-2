function getPosts() {
  const posts = [{}];
  return ({ status: 200, data: posts });
}

module.exports = getPosts;
