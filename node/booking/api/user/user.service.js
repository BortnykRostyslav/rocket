const fs = require('node:fs/promises');
const path = require('node:path');

const User = require('../../dataBase/User');
const {buildFilterQuery} = require('./user.util');

const usersPath = path.join(global.rootPath, 'dataBase', 'users.json');

module.exports = {
    /**
     * JSDoc
     * @param userId{String|Number} User ID as string
     * @returns {Promise<{name: String, id: Number}>}
     */
    getSingleUser: async (userId) => {
        //return User.findById(userId);

        const usersJson = await fs.readFile(usersPath);
        const users = JSON.parse(usersJson);

        for (const user of users) {
            if(user.id === Number(userId)){
                return user;
            }
        }
    },

    /**
     * @returns {Promise<Array<Object>>}
     */

    getAllUsers: async (query = {}) => {
        const { page = 1, perPage = 3, sortBy, order = 'ASC', ...filterQuery } = query;
        const skip = (page - 1) * perPage;

        const search = buildFilterQuery(filterQuery);

        const users = await User
            .find(search)
            .limit(perPage)
            .skip(skip);
            // .sort({[sortBy]: [order] });

        console.log(search);

        const total = await User.countDocuments(search);

        return {
            data: users,
            page,
            perPage,
            total
        };
    },

    updateUser: async (userId, newUserObject) => {
        const users = await module.exports.getAllUsers();

        const index = users.findIndex(user => user.id === Number(userId));

        users[index] = {id: Number(userId), ...newUserObject};

        await fs.writeFile(usersPath, JSON.stringify(users));

        const updateUser = module.exports.getSingleUser(userId);

        return updateUser;
    },

    deleteUserById: async (userId) => {
        const users = await module.exports.getAllUsers();

        const index = users.findIndex(user => user.id === Number(userId));

        users.splice(index, 1);

        await fs.writeFile(usersPath, JSON.stringify(users));
    },

    createUser: async (userObject) => {
        //return User.create(userObject);
        const users = await module.exports.getAllUsers();

        const userId = (users[users.length -1]?.id || 0) + 1;

        users.push({id: userId,...userObject});

        await fs.writeFile(usersPath, JSON.stringify(users));
    }
};