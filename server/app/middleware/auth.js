import config from '../config';
import ApiService from '../services/ApiService/api';

const UNAUTHORIZED_ERROR = 'Your API Key is invalid!';

// Authorize API Application
async function authApp (req: Object, res: Object, next: Function): Object {
  if (req.headers.apikey !== config.WEB_APIKEY)
    return ApiService.sendFailed(401, [UNAUTHORIZED_ERROR], {}, res);
  return next();
}

export {
  authApp
};
