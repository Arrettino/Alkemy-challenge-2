const express = require('express');
const postsController = require('../../controllers/posts');
const { asyncHandler } = require('../../middlewares');

const router = express.Router();

router.get('/', asyncHandler(postsController.findAllPosts));

router.get('/:id', asyncHandler(postsController.findPosts));

router.post('/', asyncHandler(postsController.createPosts));

router.patch('/:id', asyncHandler(postsController.updatePosts));

router.delete('/:id', asyncHandler(postsController.deletePosts));

module.exports = router;
