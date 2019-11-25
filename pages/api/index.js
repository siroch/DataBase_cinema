const router = require('express').Router();
const auth = require('./auth/auth.index');

router.use('/auth',auth);

module.exports = router;