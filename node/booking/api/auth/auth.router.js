const authRouter = require('express').Router();

const controller = require('./auth.controller');
const userMdlwr = require('../user/user.middleware');

authRouter.post('/', userMdlwr.findUserByEmail, controller.loginUser);

module.exports = authRouter;