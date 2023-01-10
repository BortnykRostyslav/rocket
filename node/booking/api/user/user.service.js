const User = require('../../dataBase/User');
const oauthService = require('../../services/oauth.service');

// const {buildFilterQuery} = require('./user.util');


module.exports = {
    getAllUsers: async () => {
        return User.find();
    },

    updateUser: async (userId, newUserObject) => {
        return User.findByIdAndUpdate(userId, newUserObject);
    },

    deleteUserById: async (userId) => {
        return User.deleteOne({_id: userId});
    },

    createUser: async (userObject) => {
        const hashPassword = await oauthService.hashPassword(userObject.password);

        return User.create({...userObject, password: hashPassword});
    },

    findUserByParams: (searchObject) => {
        return User.findOne(searchObject);
    }
};