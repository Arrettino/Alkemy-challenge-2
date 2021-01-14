async function createPosts(req, res) {
  const { id } = req.params;
  const response = { status: 200, data: { id } };
  res.status(response.status).send(response.data);
}

module.exports = createPosts;
