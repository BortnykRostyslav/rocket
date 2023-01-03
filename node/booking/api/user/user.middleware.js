const usersService = require("./user.service");

module.exports = {
    checkIsUserExists: async (req, res, next) => {
        try {
            const user = await usersService.getSingleUser(req.params.userId);

            if(!user){
                throw new Error('User not found')
            }

            req.user = user;

            next();
        } catch (e){
            res.status(400).json(e.message);
        }
    }
}