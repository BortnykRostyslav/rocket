const usersService = require("./user.service");
const ApiError = require("../../errors/ApiError");

module.exports = {
    checkIsUserExists: async (req, res, next) => {
        try {
            const user = await usersService.getSingleUser(req.params.userId);

            if(!user){
                throw new ApiError('User not found', 404)
            }

            req.user = user;

            next();
        } catch (e){
            next(e);
        }
    }
}