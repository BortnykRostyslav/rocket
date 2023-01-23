const {BANNED, WELCOME} = require('../configs/emailTypes.enum');

module.exports = {
    [WELCOME]: {
        templateName: 'welcome',
        subject: 'Welcome on board'
    },
    [BANNED]: {
        templateName: 'banned',
        subject: 'Account was blocked'
    }
};