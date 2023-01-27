const authRouter = require('express').Router();

const controller = require('./auth.controller');
const mdlwr = require('./auth.middleware');
const userMdlwr = require('../user/user.middleware');

authRouter.post('/logout', mdlwr.validateAccessToken, controller.logoutUser);
authRouter.post('/refresh', mdlwr.validateAccessToken, controller.logoutUser);

authRouter.use(userMdlwr.getUserDynamically('email', 'body'));
authRouter.post('/', controller.loginUser);
authRouter.post('/password/forgot', controller.sendForgotPasswordEmail);
authRouter.patch('/password/forgot', mdlwr.validateAccessToken, controller.logoutUser);

module.exports = authRouter;