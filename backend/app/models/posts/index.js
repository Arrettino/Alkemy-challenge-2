const findAllPosts = require('./findAllPosts');
const findPosts = require('./findPosts');
const createPosts = require('./createPosts');
const updatePosts = require('./updatePosts');
const deletePosts = require('./deletePosts');
const PostsModel = require('./PostsModel');

module.exports = {
  findAllPosts,
  findPosts,
  createPosts,
  updatePosts,
  deletePosts,
  PostsModel,
};
