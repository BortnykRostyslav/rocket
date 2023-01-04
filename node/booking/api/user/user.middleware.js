const usersService = require("./user.service");
const {NotFound} = require("../../errors/ApiError");

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
    }
}