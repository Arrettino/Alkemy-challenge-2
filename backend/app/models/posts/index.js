const findAllPosts = require('./findAllPosts');
const findPosts = require('./findPosts');
const createPosts = require('./createPosts');
const PostsModel = require('./PostsModel');

module.exports = {
  findAllPosts,
  findPosts,
  createPosts,
  PostsModel,
};
