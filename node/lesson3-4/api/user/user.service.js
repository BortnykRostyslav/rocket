const users = require("../../dataBase/users");
module.exports = {
    getSingleUser: (userId) => {
        const user = users[userId-1];

        if(!user){
           throw new Error('User not found');
        }

        return user;
    }
}