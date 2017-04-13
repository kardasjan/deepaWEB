import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', (req: Object, res: Object) => {
  res.render('index', {title: 'Aplikace meloucháři'});
});

export default router;
