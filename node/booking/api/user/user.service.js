const User = require('../../dataBase/User');

module.exports = {
    getAllUsers: async() => {
        return User.find();
    },

    getSingleUser: async (userId) => {
        return User.findById(userId);
    },

    createUser: async (userObject) => {
        return User.create(userObject);
    },

    updateUser: async (userId, newUserObject) => {
        return User.findOneAndUpdate(userId, newUserObject, {new: true});
    },

    deleteUserById: async (userId) => {
        return User.deleteOne({_id:userId});
    },

    findUserByParams: async (filter) => {
        return User.findOne(filter);
    }
};