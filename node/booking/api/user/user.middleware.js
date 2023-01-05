const usersService = require('./user.service');
const {Forbidden, NotFound} = require('../../errors/ApiError');
const {EmailValidUniq} = require('../../checker/user.checker');

module.exports = {
    checkIsUserExists: async (req, res, next) => {
        try {
            const user = await usersService.getSingleUser(req.params.userId);

            if (!user) {
                throw new NotFound('User not found');
            }

            req.user = user;

            next();
        } catch (e) {
            next(e);
        }
    },

    checkIsRegistryBodyValid: async (req, res, next) => {
        try {
            const {firstName, lastName, password, age, email} = req.body;

            if (typeof firstName !== 'string' || firstName.length <= 2) {
                throw new Forbidden('Incorrect Name');
            }

            if (typeof lastName !== 'string' || lastName.length <= 2) {
                throw new Forbidden('Incorrect LastName');
            }

            if (typeof password !== 'string' || !password || password.length < 8) {
                throw new Forbidden('Incorrect Password');
            }

            if (typeof age !== 'number' || age <= 0) {
                throw new Forbidden('Incorrect Age');
            }

            const findEmail = await usersService.findUserByParams({email});

            if (!email || !EmailValidUniq(email)) {
                throw new Forbidden('Incorrect Email');
            }

            if (findEmail) {
                throw new Forbidden('Email has been used');
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};