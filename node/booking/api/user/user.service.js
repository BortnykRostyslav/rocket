const users = require("../../dataBase/users");
const User = require("../../dataBase/User");

module.exports = {
    getSingleUser: (userId) => {
        return User.findById(userId);
    },

    createUser: (userObject) => {
        return User.create(userObject);
    }
}