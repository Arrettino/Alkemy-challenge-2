async function creationPosts({
  title,
  content,
  image,
  category,
  creationdDate,
}) {
  const posts = {
    title, content, image, category, creationdDate,
  };
  return ({ status: 200, data: posts });
}

module.exports = creationPosts;
