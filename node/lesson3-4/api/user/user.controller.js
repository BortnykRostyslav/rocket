const users = require("../../dataBase/users.json");
const userService = require("./user.service");


module.exports = {
    getAllUsers: (req, res) => {
        res.json(users);
    },

    createUser: async (req, res) => {
        try {
            await userService.addUser(req.body);
            res.status(201).json('User add JSON File');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await userService.getSingleUser(req.params.userId);
            res.json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    updateUser: async (req, res) => {
        try {
            await  userService.updateUser(req.params.userId,req.body)
            res.json('Update user');
        }catch (e) {
            res.status(400).json(e);
        }


    },

    deleteUser: async (req, res) => {
        try {
            await userService.deleteUser(req.params.userId)
            res.json('Delete user');
        }catch (e){
            res.status(400).json(e);
        }

    }
}