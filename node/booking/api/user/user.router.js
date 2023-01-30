const userRouter = require('express').Router()

const controller = require('./user.controller');
const authMdlwr = require('../auth/auth.middleware');
const mdlwr = require('./user.middleware');
const commonMdlwr = require('../../middlewares/common.middlewares');

userRouter.get('/', controller.getAllUsers);
userRouter.post('/', mdlwr.newUserValidator, mdlwr.checkUserDuplicates('email', 'body'), controller.createUser);

userRouter.get('/profile', authMdlwr.validateAccessToken, controller.getMyProfile);

userRouter.use('/:userId', commonMdlwr.objectIdValidator('userId'), mdlwr.getUserDynamically('userId', 'params', '_id'));

userRouter.get('/:userId', controller.getUserById);
userRouter.put('/:userId',  controller.updateUser);
userRouter.delete('/:userId', controller.deleteUser);
userRouter.post('/:userId/avatar', mdlwr.checkUserAvatar, controller.uploadUserAvatar);

module.exports = userRouter;