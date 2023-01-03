const users = require("../../dataBase/users");
const usersService = require("./user.service");


module.exports = {
    getAllUsers: (req, res) => {
       res.json(users);
    },

    createUser: async (req, res, next) => {
        try {
            const createdUser = await usersService.createUser(req.body);

            res.status(201).json(createdUser);
        } catch (e){
            next(e);
        }
    },

    getUserById: async  (req, res, next) => {
        try {
            res.json(req.user);
        } catch (e) {
            next(e);
        }
    },

    updateUser: (req, res) => {
        try{
            res.json('Hello Test friend');
        } catch (e){
            console.log(e)
        }
    },

    deleteUser: (req, res) => {
        console.log(req);

        res.json('Hello Test friend');
    }
}