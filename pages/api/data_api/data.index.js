const router = require('express').Router();
const controller = require('./data.controller');
const authMiddleware = require('../../../middlewares/auth');
const rvController = require('./review.controller');

router.get('/movies/:movieCd',controller.moviedata);
router.get('/sortData',controller.getSortInfo);
router.get('/timetable',controller.timetable);
router.get('/seats',controller.seats);
router.get('/reserveNum',controller.reserveNum);
router.use('/reserveMovie',authMiddleware);
router.post('/reserveMovie',controller.reserveMovie);
router.post('/postReview', rvController.postRating);
router.post('/getReview', rvController.getRating);

module.exports = router;