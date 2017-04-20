/**
 * Authorization validation
 * It should be triggered manually by routes
 */
import Joi from 'joi';
import ApiService from '../ApiService/api';

const userSchema = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required()
});

const tokenSchema = Joi.object().keys({
  token: Joi.string().required()
}).unknown(true);

async function authorizeValidation (req: Object, res: Object, next: Function): Object {
  const result = Joi.validate(req.body, userSchema);
  if ( result.error !== null ) {
    return ApiService.badJoiValidationResponse(result.error, res);
  }
  return next();
} 

async function tokenValidation ( req: Object, res: Object, next: Function ): Object {
  const result = Joi.validate(req.headers, tokenSchema);
  if ( result.error !== null ) {
    return ApiService.badJoiValidationResponse(result.error, res);
  }
  return next();
}

export {
  authorizeValidation,
  tokenValidation
};
