const express = require('express');
const postsController = require('../../controllers/posts');

const router = express.Router();

router.get('/', postsController.findAllPosts);

router.get('/:id', postsController.findPosts);

router.post('/', postsController.createPosts);

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).send({ id });
});

module.exports = router;
