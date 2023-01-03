const users = require("../../dataBase/users");
const usersService = require("./user.service");


module.exports = {
    getAllUsers: (req, res) => {
       res.json(users);
    },

    createUser: async (req, res) => {
        try {
            const createdUser = await usersService.createUser(req.body);

            res.status(201).json(createdUser);
        } catch (e){
            res.status(404).json(e.message);
        }
    },

    getUserById: async  (req, res) => {
        try {
            console.log(req.user);

            res.json(req.user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    updateUser: (req, res) => {
        console.log(req);

        res.json('Hello Test friend');
    },

    deleteUser: (req, res) => {
        console.log(req);

        res.json('Hello Test friend');
    }
}