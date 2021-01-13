const express = require('express');
const postsController = require('../../controllers/posts');

const router = express.Router();

router.get('/', postsController.findAllPosts);

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).send({ id });
});

module.exports = router;
