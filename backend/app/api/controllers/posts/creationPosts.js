async function creationPosts(req, res) {
  const data = req.body;
  const response = { status: 200, data };
  res.status(response.status).send(response.data);
}

module.exports = creationPosts;
