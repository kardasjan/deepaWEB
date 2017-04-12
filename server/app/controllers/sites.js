import Site from '../model/site';

import { SiteNotFoundError, SitesNotFoundError } from '../services/ErrorService/sites';

async function getAll(filter: Object): Promise {
  return await Site.find(filter).exec()
    .then( (sites: Site[]): Site[] => {
      if (sites === null) {
        throw new SitesNotFoundError();
      }
      return sites;
    });
}

async function getOne(filter: Object): Promise {
  return await Site.findOne(filter).exec()
    .then( (site: Site): Site => {
      if (site === null) {
        throw new SiteNotFoundError();
      }
      return site;
    });
}

export default {
  getAll,
  getOne,
};
