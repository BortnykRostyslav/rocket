const authRouter = require('express').Router();

const controller = require('./auth.controller');
const mdlwr = require('./auth.middleware');
const userMdlwr = require('../user/user.middleware');

authRouter.post('/', userMdlwr.getUserDynamically('email', 'body'), controller.loginUser);
authRouter.post('/logout', mdlwr.validateAccessToken, controller.logoutUser);

module.exports = authRouter;