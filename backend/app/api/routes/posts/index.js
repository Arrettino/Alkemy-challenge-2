const express = require('express');
const postsController = require('../../controllers/posts');
const { asyncHandler, validationHandler } = require('../../middlewares');
const { postsId, posts } = require('../../validations');

const router = express.Router();

router.get('/', asyncHandler(postsController.findAllPosts));

router.get('/:id',
  validationHandler(postsId, 'params'),
  asyncHandler(postsController.findPosts));

router.post('/',
  validationHandler(posts, 'body'),
  asyncHandler(postsController.createPosts));

router.patch('/:id',
  validationHandler(postsId, 'params'),
  validationHandler(posts, 'body'),
  asyncHandler(postsController.updatePosts));

router.delete('/:id',
  validationHandler(postsId, 'params'),
  asyncHandler(postsController.deletePosts));

module.exports = router;
