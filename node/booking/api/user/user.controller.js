const usersService = require('./user.service');

module.exports = {
    getMyProfile: (req, res, next) => {
        try {
            res.status('ok');
        } catch (e) {
            next(e);
        }
    },

    getAllUsers: async (req, res) => {
        const allUsers = await usersService.getAllUsers(req.query);
        res.json(allUsers);
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
            await usersService.deleteUserById(req.params.userId);

            res.status(204).end();
        } catch (e) {
            next(e);
        }
    }
};