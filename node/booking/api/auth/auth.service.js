const OAuth = require('../../dataBase/OAuth');

module.exports = {
    createOauthPair: (tokenData) => {
        return OAuth.create(tokenData);
    }
};