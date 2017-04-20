import Joi from 'joi';

export const idSchema = Joi.object().keys({
  id: Joi.string().required()
});

export const itemSchema = Joi.object().keys({
  item: Joi.object().required()
});
