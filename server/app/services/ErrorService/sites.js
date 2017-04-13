import BaseError from './BaseError';
import ErrMsg from './messages/sites';

class SiteNotFoundError extends BaseError {
  constructor () { super(ErrMsg.SITE_NOT_FOUND); }
}

class SitesNotFoundError extends BaseError {
  constructor () { super(ErrMsg.SITES_NOT_FOUND); }
}

export default {
  SiteNotFoundError,
  SitesNotFoundError
};
