async function deletePosts({ id }) {
  const post = { id };
  return ({ status: 200, data: post });
}

module.exports = deletePosts;
