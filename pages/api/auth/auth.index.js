const router = require('express').Router();
const controller = require('./auth.controller');
const authMiddleware = require('../../../middlewares/auth')

router.post('/register',controller.register);
router.post('/login',controller.login);
router.use('/check',authMiddleware);
router.get('/check',controller.check);
router.get('/:id', controller.samecheck);

module.exports = router;