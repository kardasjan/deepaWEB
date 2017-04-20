import express from 'express';
import Middleware from '../middleware/example';
import Validation from '../middleware/validation/example';
import { isAuthorized } from '../services/AuthService/middleware';

const router = express.Router();

const ROUTE_INDEX = '/';
const ROUTE_ID = '/:id';
const ROUTE_PARAM = '/getByParam';

/*
* Every part of documentation has #replace# string which should be replaced
* with lowercase name of the item. #Replace# should be replaced with capital letter.
* CRUD definition prepared in following routes.
*/

/**
 * @api {get} /#replace#/ Get all #replace#
 * 
 * @apiName getAll#Replace#
 * @apiDescription Get all #replace#
 * @apiGroup #Replace#
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * @apiHeader (Header) {Object} filter Parameter to search for object
 *
 */
router.get(ROUTE_INDEX, isAuthorized, [Validation.getAllValidation, Middleware.getAll]);

/**
 * @api {get} /#replace#/getByParam Get #replace#
 * 
 * @apiName get#Replace#
 * @apiDescription Get one #replace# matching id
 * @apiGroup #Replace#
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * @apiHeader (Header) {Object} filter Parameter to search for object
 *
 */
router.get(ROUTE_PARAM, isAuthorized, [Validation.getValidation, Middleware.getItem]);

/**
 * @api {get} /#replace#/param Get #replace# by param
 * 
 * @apiName get#Replace#
 * @apiDescription Get one #replace# matching id
 * @apiGroup #Replace#
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * 
 * @apiParam {Number} id Unique ID
 *
 */
router.get(ROUTE_ID, isAuthorized, [Validation.getByParamValidation, Middleware.getByParam]);

/**
 * @api {post} /#replace# New #replace#
 * 
 * @apiName new#Replace#
 * @apiDescription Create new #replace# with values stored in JSON object.
 * @apiGroup #Replace#
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 *
 * @apiParam (JSON Body) {Object} item Object with values
 *
 */
router.post(ROUTE_INDEX, isAuthorized, [Validation.newValidation, Middleware.newItem]);

/**
 * @api {put} /#replace#/:id Edit #replace#
 * 
 * @apiName edit#Replace#
 * @apiDescription Edit #replace#, update to values in JSON object.
 * @apiGroup #Replace#
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
 * @api {delete} /#replace#/:id Delete #replace#
 * 
 * @apiName delete#Replace#
 * @apiDescription Delete #replace# matching ID in URL
 * @apiGroup #Replace#
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token JWT Token
 * 
 * @apiParam {Number} id Unique ID
 *
 */
router.delete(ROUTE_ID, isAuthorized, [Validation.deleteValidation, Middleware.deleteItem]);

export default router;
