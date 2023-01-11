const authRouter = require('express').Router();

const controller = require('./auth.controller');
const userMdlwr = require('../user/user.middleware');

authRouter.post('/', userMdlwr.getUserDynamically('email', 'body'), controller.loginUser);

module.exports = authRouter;