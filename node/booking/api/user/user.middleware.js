const usersService = require('./user.service');
const {Forbidden, NotFound, BadRequest} = require('../../errors/ApiError');
const {newUserSchema} = require('./user.validator');
const authService = require('../auth/auth.service');

module.exports = {
    checkIsUserExists: async (req, res, next) => {
        try {
            const user = await usersService.findUserByParams({ _id: req.params.userId});

            if (!user) {
                throw new NotFound('User not found');
            }

            req.user = user;

            next();
        } catch (e) {
            next(e);
        }
    },

    findUserByEmail: async (req, res, next) => {
        try {
            const user = await usersService.findUserByParams({email: req.body.email});

            if (!user) {
                throw new NotFound('User not found');
            }

            req.user = user;

            next();
        } catch (e) {
            next(e);
        }
    },

    newUserValidator: async (req, res, next) => {
        try {
            const {error, value} = newUserSchema.validate(req.body);

            if (error) {
                throw new BadRequest(error);
            }

            req.body = value;
            next();
        } catch (e) {
            next(e);
        }
    }
};