const users = require("../../dataBase/users");
const usersService = require("./user.service");


module.exports = {
    getAllUsers: (req, res) => {
       res.json(users);
    },

    createUser: (req, res) => {
        console.log(req.body);

        res.json('Hello Test Chat');
    },

    getUserById: (req, res) => {
        try {
            console.log(req.params);

            const user = usersService.getSingleUser(req.params.userId);

            res.json(user);
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