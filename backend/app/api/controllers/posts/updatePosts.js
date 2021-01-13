async function updatePosts(req, res) {
  const {
    title, content, image, category, creationdDate,
  } = req.body;
  const response = {
    status: 200,
    data: {
      title, content, image, category, creationdDate,
    },
  };
  res.status(response.status).send(response.data);
}

module.exports = updatePosts;
