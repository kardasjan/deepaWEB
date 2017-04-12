import express from 'express';

import { authApp } from '../middleware/auth';
import { getValidation, getAll, getSite } from '../middleware/sites';

const router = express.Router();

// Routes
const ROUTE_INDEX = '/';
const ROUTE_SITE = '/site';

/**
 * @api {get} /sites/ Get All Sites
 * @apiName getAll
 * @apiDescription Get all sites matching filter object.
 * @apiGroup Sites
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} authorization Auth token
 *
 * @apiParam (POST PARAM - JSON) {Object} filter Parameters for Mongoose query
 *
 */
router.get(ROUTE_INDEX, authApp, [getValidation, getAll]);

/**
 * @api {get} /sites/site Get site
 * @apiName getSite
 * @apiDescription Get one site matching filter object.
 * @apiGroup Site
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} authorization Auth token
 *
 * @apiParam (POST PARAM - JSON) {Object} filter Parameters for Mongoose query
 *
 */
router.get(ROUTE_SITE, authApp, [getValidation, getSite]);

/**
 * @api {post} /sites/site New site
 * @apiName newSite
 * @apiDescription Create new site with values stored in site object.
 * @apiGroup Site
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} authorization Auth token
 *
 * @apiParam (POST PARAM - JSON) {Object} site Site values
 *
 */
router.post(ROUTE_SITE, authApp, []);

/**
 * @api {delete} /sites/site Delete site
 * @apiName deleteSite
 * @apiDescription Delete all sites matching filter values.
 * @apiGroup Site
 * @apiVersion 0.0.0
 *
 * @apiHeader (Header) {String} authorization Auth token
 *
 * @apiParam (POST PARAM - JSON) {Object} filter Parameters for Mongoose query
 *
 */
router.delete(ROUTE_SITE, authApp, []);

export default router;
