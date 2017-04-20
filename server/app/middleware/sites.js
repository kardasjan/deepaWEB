import ApiService from '../services/ApiService/api';
import SitesController from '../controllers/sites';
import Site from '../model/site';

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

async function newSite (req: Object, res: Object): Object {
  return await SitesController.addSite(req.body.site)
    .then((site: Site): Object => {
      return ApiService.sendSuccess(site, res);
    })
    .catch((err: Error): Object => {
      if (err.name === 'ValidationError')
        return ApiService.badMongooseValidationResponse(err, res);
      return ApiService.sendFailed(500, [err.message], {}, res);
    });
}

export {
  getAll,
  getSite,
  newSite
};
