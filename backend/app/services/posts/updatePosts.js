async function updatePosts({
  title,
  content,
  image,
  category,
  creationdDate,
}) {
  const posts = {
    data: {
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
