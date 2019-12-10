const router = require('express').Router();
const controller = require('./auth.controller');
const authMiddleware = require('../../../middlewares/auth')

router.post('/register',controller.register);
router.post('/login',controller.login);
router.use('/check',authMiddleware);
router.get('/check',controller.check);
router.get('/samecheck/:id', controller.samecheck);
router.post('/update', controller.updateUserInfo);
router.post('/updatepurchase', controller.updateUserPurchase);
router.get('/getpurchase/:id', controller.getUserPurchase);
router.get('/getusermovie/:id', controller.getUserMovie);
module.exports = router;