const usersService = require('./user.service');

module.exports = {
    getAllUsers: async (req, res, next) => {
        try{
            const allUsers = await usersService.getAllUsers(req.body);

            res.json(allUsers);
        } catch (e){
            next(e)
        }
    },

    createUser: async (req, res, next) => {
        try {
            const createdUser = await usersService.createUser(req.body);

            res.status(201).json(createdUser);
        } catch (e) {
            next(e);
        }
    },

    getUserById: async (req, res, next) => {
        try {
            res.json(req.user);
        } catch (e) {
            next(e);
        }
    },

    updateUser: async (req, res) => {
        try {
            const updatedUser = await usersService.updateUser(req.params.userId, req.body);

            res.json(updatedUser);
        } catch (e) {
            console.log(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const deleteUser = await usersService.deleteUserById(req.params.userId);

            res.json(deleteUser);
        } catch (e) {
            next(e);
        }
    }
};