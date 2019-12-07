const router = require('express').Router();
const controller = require('./data.controller');

router.get('/timetable',controller.timetable);
router.get('/movies/:movieCd',controller.moviedata);
router.get('/sortData',controller.getSortInfo);
module.exports = router;