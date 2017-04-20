import Joi from 'joi';

export const newSchema = Joi.object().keys({
  site: Joi.object().required()
});

export const getSchema = Joi.object().keys({
  filter: Joi.object().required()
}).unknown(true);
