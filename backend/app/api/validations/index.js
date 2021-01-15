const Joi = require('joi');

const imgUrlRegexp = new RegExp(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png)/);

const schemas = {
  posts: Joi.object().keys({
    title: Joi.string().min(3).max(30).required(),
    content: Joi.string().min(3).required(),
    image: Joi.string().regex(imgUrlRegexp).message('image must be a (jpg/png) url').required(),
    categoriesId: Joi.number().integer().positive().required(),
    createdAt: Joi.date().required(),
  }),
  postsId: Joi.object().keys({
    id: Joi.number().integer(),
  }),
};

module.exports = schemas;
