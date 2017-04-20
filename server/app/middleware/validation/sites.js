import Joi from 'joi';
import ApiService from '../../services/ApiService/api';
import { getSchema, newSchema } from './schema/sites';

async function newValidation (req: Object, res: Object, next: Function): Promise {
  const result = Joi.validate(req.body, newSchema);
  if ( result.error !== null ) {
    return ApiService.badJoiValidationResponse(result.error, res);
  }
  return next();
}

async function getValidation (req: Object, res: Object, next: Function): Promise {
  const result = Joi.validate(req.headers, getSchema);
  if ( result.error !== null )
    return ApiService.badJoiValidationResponse(result.error, res);
  return next();
}

export {
  newValidation,
  getValidation
};
