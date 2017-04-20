import express from 'express';
import Middleware from '../middleware/user';
import Validation from '../middleware/validation/user';
import { isAuthorized } from '../services/AuthService/middleware';

const router = express.Router();

const ROUTE_INDEX = '/';
const ROUTE_ID = '/:id';

/*
* Every part of documentation has #default# string which should be replaced
* with lowercase name of the item. #Default# should be replaces with capital letter.
* CRUD definition prepared in following routes.
*/

/**
 * @api {get} /user/ Get all user
 * 
 * @apiName getAllUser
 * @apiDescription Get all user
 * @apiGroup User
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 *
 */
router.get(ROUTE_INDEX, isAuthorized, [Middleware.getAll]);


/**
 * @api {get} /user/:id Get user
 * 
 * @apiName getUser
 * @apiDescription Get one user matching id
 * @apiGroup User
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * 
 * @apiParam {Number} id Unique ID
 *
 */
router.get(ROUTE_ID, isAuthorized, [Validation.getValidation, Middleware.getItem]);

/**
 * @api {post} /user New user
 * 
 * @apiName newUser
 * @apiDescription Create new user with values stored in JSON object.
 * @apiGroup User
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 *
 * @apiParam (JSON Body) {Object} item Object with values
 *
 */
router.post(ROUTE_INDEX, [Validation.newValidation, Middleware.newItem]);

/**
 * @api {put} /user/:id Edit user
 * 
 * @apiName editUser
 * @apiDescription Edit user, update to values in JSON object.
 * @apiGroup User
 * @apiVersion 0.0.0
 * 
 * @apiHeader (Header) {String} token JWT Token
 * 
 * @apiParam {Number} id Unique ID
 * 
 * @apiParam (JSON Body) {Object} item Object with values
 *
 */
router.put(ROUTE_ID, isAuthorized, [Validation.editValidation, Middleware.editItem]);

/**
 * @api {delete} /user/:id Delete user
 * 
 * @apiName deleteUser
 * @apiDescription Delete user matching ID in URL
 * @apiGroup User
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * 
 * @apiParam {Number} id Unique ID
 *
 */
router.delete(ROUTE_ID, isAuthorized, [Validation.deleteValidation, Middleware.deleteItem]);

export default router;
