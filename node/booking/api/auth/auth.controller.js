const service = require('./auth.service');
const oauthService = require('../../services/oauth.service');

module.exports = {
    loginUser: async (req, res, next) => {
        try {
            const user = req.user;

            await oauthService.checkPassword(user.password, req.body.password);

            await service.createOauthPair({});
            res.json({});
        } catch (e) {
            next(e);
        }
    }
};