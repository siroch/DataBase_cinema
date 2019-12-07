const router = require('express').Router();
const auth = require('./auth/auth.index');
const data = require('./data_api/data.index');
router.use('/auth',auth);
router.use('/data',data);
module.exports = router;