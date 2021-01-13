async function updatePosts({
  id,
  title,
  content,
  image,
  category,
  creationDate,
}) {
  const posts = {
    data: {
      id,
      title,
      content,
      image,
      category,
      creationDate,
    },
  };
  return ({ status: 200, data: posts });
}

module.exports = updatePosts;
