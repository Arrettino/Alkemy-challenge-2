async function updatePosts({
  id,
  title,
  content,
  image,
  category,
  creationdDate,
}) {
  const posts = {
    data: {
      id,
      title,
      content,
      image,
      category,
      creationdDate,
    },
  };
  return ({ status: 200, data: posts });
}

module.exports = updatePosts;
