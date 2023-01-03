const userRouter = require('express').Router()

const controller = require('./user.controller');
const mdlwr = require('./user.middleware');

userRouter.get('/', controller.getAllUsers);
userRouter.post('/', controller.createUser);

userRouter.get('/:userId', controller.getUserById);
userRouter.put('/:userId', mdlwr.checkIsUserExists, controller.updateUser);
userRouter.delete('/:userId', mdlwr.checkIsUserExists, controller.deleteUser);

module.exports = userRouter;