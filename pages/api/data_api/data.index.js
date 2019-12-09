const router = require('express').Router();
const controller = require('./data.controller');
const authMiddleware = require('../../../middlewares/auth');
const rvController = require('./review.controller');

router.get('/movies/:movieCd',controller.moviedata);
router.get('/sortData',controller.getSortInfo);
router.get('/timetable',controller.timetable);
router.get('/seats',controller.seats);
router.post('/postReview', rvController.postRating);

module.exports = router;