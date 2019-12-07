const router = require('express').Router();
const time_t = require('./timetable');

router.get('/timetable',time_t.timetable);

module.exports = router;