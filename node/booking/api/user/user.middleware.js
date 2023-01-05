const usersService = require("./user.service");
const {BadRequest, Unauthorized, Forbidden, NotFound, Conflict  } = require("../../errors/ApiError");

module.exports = {
    checkIsUserExists: async (req, res, next) => {
        try {
            const user = await usersService.getSingleUser(req.params.userId);

            if(!user){
                throw new NotFound('User not found');
            }

            req.user = user;

            next();
        } catch (e){
            next(e);
        }
    },

    checkIsRegistryBodyValid: (req, res, next) => {
        try {
            const {firstName, lastName, password, age} = req.body;

            if (typeof firstName !== 'string' || firstName.length < 2) {
                throw new Forbidden('Incorrect Name');
            }

            if (typeof lastName !== 'string' || lastName.length < 2) {
                throw new Forbidden('Incorrect LastName');
            }

            if (typeof password !== 'string' || !password || password.length < 8) {
                throw new Forbidden('Incorrect Password');
            }

            if (typeof age !== 'number' || age < 0) {
                throw new Forbidden('Incorrect Age');
            }

            next();
        } catch (e) {

        }
    }
}