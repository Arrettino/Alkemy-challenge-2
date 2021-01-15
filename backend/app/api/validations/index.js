const Joi = require('joi');

const schemas = {
  posts: Joi.object().keys({
    title: Joi.string().min(3).max(30).required(),
    content: Joi.string().min(3).required(),
    image: Joi.string(),
    categoriesId: Joi.number().integer().positive().required(),
    createdAt: Joi.string().length(10).required(),
  }),
  postsId: Joi.object().keys({
    id: Joi.number().integer(),
  }),
};

module.exports = schemas;
