import express from 'express';

const router = express.Router();

const ROUTE_INDEX = '/';

/* GET home page. */
router.get(ROUTE_INDEX, (req: Object, res: Object) => {
  res.render('index', {title: 'Aplikace meloucháři'});
});

export default router;
