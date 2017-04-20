import Joi from 'joi';
import ApiService from '../../services/ApiService/api';
import { idSchema, itemSchema } from './schema/user';

async function newValidation (req: Object, res: Object, next: Function): Promise {
  const result = Joi.validate(req.body, itemSchema);
  if ( result.error !== null ) {
    return ApiService.badJoiValidationResponse(result.error, res);
  }

  return next();
}

async function editValidation (req: Object, res: Object, next: Function): Promise {
  let result = Joi.validate(req.parameters, idSchema);
  if ( result.error !== null ) {
    return ApiService.badJoiValidationResponse(result.error, res);
  }

  result = Joi.validate(req.body, itemSchema);
  if ( result.error !== null ) {
    return ApiService.badJoiValidationResponse(result.error, res);
  }

  return next();
}

async function deleteValidation (req: Object, res: Object, next: Function): Promise {
  const result = Joi.validate(req.parameters, idSchema);
  if ( result.error !== null ) {
    return ApiService.badJoiValidationResponse(result.error, res);
  }

  return next();
}

async function getValidation (req: Object, res: Object, next: Function): Promise {
  const result = Joi.validate(req.parameters, idSchema);
  if ( result.error !== null ) {
    return ApiService.badJoiValidationResponse(result.error, res);
  }

  return next();
}


export default {
  newValidation,
  editValidation,
  deleteValidation,
  getValidation
};
