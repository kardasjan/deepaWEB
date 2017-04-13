import Joi from 'joi';
import ApiService from '../services/ApiService/api';
import SitesController from '../controllers/sites';
import Site from '../model/site';

async function getValidation (req: Object, res: Object, next: Function): Promise {
  const schema = Joi.object().keys({
    filter: Joi.object().required()
  }).unknown(true);
  const result = Joi.validate(req.headers, schema);

  if ( result.error !== null )
    return ApiService.joiValidation(result.error, res);
  return next();
}

async function getAll (req: Object, res: Object): Promise {
  return await SitesController.getAll(req.headers.filter)
    .then((sites: Site[]): Object => {
      return ApiService.sendSuccess(sites, res);
    })
    .catch((err: Error): Object => {
      if (err.name === 'SitesNotFound')
        return ApiService.sendFailed(404, [err.message], {}, res);
      return ApiService.sendFailed(500, [err.message], {}, res);
    });
}

async function getSite (req: Object, res: Object): Promise {
  return await SitesController.getOne(req.body.filter)
    .then((site: Site): Object => {
      return ApiService.sendSuccess(site, res);
    })
    .catch((err: Error): Object => {
      if (err.name === 'SitsNotFound')
        return ApiService.sendFailed(404, [err.message], {}, res);
      return ApiService.sendFailed(500, [err.message], {}, res);
    });
}

async function newValidation (req: Object, res: Object, next: Function): Object {
  const schema = Joi.object().keys({
    site: Joi.object().required()
  });
  const result = Joi.validate(req.body, schema);

  if ( result.error !== null ) {
    return ApiService.joiValidation(result.error, res);
  }
  return next();
}

async function newSite (req: Object, res: Object): Object {
  return await SitesController.addSite(req.body.site)
    .then((site: Site): Object => {
      return ApiService.sendSuccess(site, res);
    })
    .catch((err: Error): Object => {
      if (err.name === 'ValidationError')
        return ApiService.mongooseValidation(err, res);
      return ApiService.sendFailed(500, [err.message], {}, res);
    });
}

export {
  getAll,
  getSite,
  getValidation,
  newSite,  
  newValidation
};
