import express from 'express';
import { tokenValidation, authorizeValidation } from './validation';
import { authorize, isAuthorized } from './middleware';

const router = express.Router();

const ROUTE_AUTH = '/';

/**
 * @api {post} /auth Get JWT token
 * @apiName Authorize
 * @apiDescription Post username and password to receive token
 * @apiGroup Authorization
 * @apiVersion 0.0.0
 *
 * @apiParam (JSON Body) {String} username Username
 * @apiParam (JSON Body) {String} password Password
 *
 */
router.post(ROUTE_AUTH, authorizeValidation, [authorize]);

/**
 * @api {get} /auth Check token validity
 * @apiName Authorized
 * @apiDescription Post token in header and see if it works
 * @apiGroup Authorization
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token Auth token
 *
 */
router.get(ROUTE_AUTH, tokenValidation, [isAuthorized, authOk]);

/**
 * Helper function;
 * isAuthorized() returns next() if everything is OK,
 * this function ensures HTTP response 200
 */
function authOk (req: Object, res: Object) {
  res.status(200);
}

export default router;
