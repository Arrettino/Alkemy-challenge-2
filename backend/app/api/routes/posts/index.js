const express = require('express');
const postsController = require('../../controllers/posts');

const router = express.Router();

router.get('/', postsController.findAllPosts);

router.get('/:id', postsController.findPosts);

router.post('/', postsController.createPosts);

router.patch('/:id', postsController.updatePosts);

router.delete('/:id', postsController.deletePosts);

module.exports = router;
