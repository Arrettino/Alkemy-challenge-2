const express = require('express');
const postsController = require('../../controllers/posts');

const router = express.Router();

router.get('/', postsController.findAllPosts);

router.get('/:id', postsController.findPosts);

router.post('/', (req, res) => {
  const data = req.body;
  res.status(200).send(data);
});

module.exports = router;
