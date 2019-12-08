const router = require('express').Router();
const controller = require('./data.controller');
const authMiddleware = require('../../../middlewares/auth');

router.get('/movies/:movieCd',controller.moviedata);
router.get('/sortData',controller.getSortInfo);
router.get('/timetable',controller.timetable);
router.get('/seats',controller.seats);

module.exports = router;