const usersService = require("./user.service");
const {NotFound, BadRequest} = require("../../errors/ApiError");
const {newUserSchema} = require('./user.validator');

module.exports = {
    checkIsUserExists: async (req, res, next) => {
        try {
            const user = await usersService.getSingleUser(req.params.userId);

            if(!user){
                throw new NotFound('User not found')
            }

            req.user = user;

            next();
        } catch (e){
            next(e);
        }
    },

    newUserValidator: async (req, res, next) => {
        try {
            const { error, value } = newUserSchema.validate(req.body);

            if (error){
                throw new BadRequest(error);
            }

            req.body = value;
            next();
        } catch (e){
            next(e);
        }
    }
};