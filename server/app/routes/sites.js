import express from 'express';
import { getAll, getSite, newSite } from '../middleware/sites';
import { getValidation, newValidation } from '../middleware/validation/sites';
import { isAuthorized } from '../services/AuthService/middleware';

const router = express.Router();

// Routes
const ROUTE_FIND = '/';
const ROUTE_SITE = '/site';
const ROUTE_SITE_ID = '/site/:id';

/**
 * @api {get} /sites/ Get all
 * 
 * @apiName getAll
 * @apiDescription Get all sites matching filter object.
 * @apiGroup Sites
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token Auth token
 * @apiHeader (Header) {Object} filter Parameters for Mongoose query
 *
 */
router.get(ROUTE_FIND, isAuthorized, [getValidation, getAll]);

/**
 * @api {get} /sites/site/:id Get site
 * @apiParam {Number} id Users unique ID.
 * 
 * @apiName getSite
 * @apiDescription Get one site matching filter object.
 * @apiGroup Sites/Site
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token Auth token
 * @apiHeader (Header) {Object} filter Parameters for Mongoose query
 *
 */
router.get(ROUTE_SITE_ID, isAuthorized, [getValidation, getSite]);

/**
 * @api {post} /sites/site New site
 * 
 * @apiName newSite
 * @apiDescription Create new site with values stored in site object.
 * @apiGroup Sites/Site
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token Auth token
 *
 * @apiParam (POST PARAM - JSON) {Object} site Site values
 *
 */
router.post(ROUTE_SITE, isAuthorized, [newValidation, newSite]);

/**
 * @api {put} /sites/site/:id Edit site
 * @apiParam {Number} id Users unique ID.
 * 
 * @apiName editSite
 * @apiDescription Edit site to values stored in site object.
 * @apiGroup Sites/Site
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token Auth token
 *
 * @apiParam (JSON) {Object} site Site values
 *
 */
router.put(ROUTE_SITE_ID, isAuthorized, []);

/**
 * @api {delete} /sites/site/:id Delete site
 * @apiParam {Number} id Users unique ID.
 * 
 * @apiName deleteSite
 * @apiDescription Delete site matching ID in URL
 * @apiGroup Sites/Site
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} token Auth token
 *
 */
router.delete(ROUTE_SITE_ID, isAuthorized, []);

export default router;
