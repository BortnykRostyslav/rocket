const service = require('./auth.service');
const oauthService = require('../../services/oauth.service');

module.exports = {
    loginUser: async (req, res, next) => {
        try {
            const user = req.locals.user;

            await oauthService.checkPassword(user.password, req.body.password);
            const tokenPair = oauthService.generateNewAccessTokenPair({...user});

            await service.createOauthPair({...tokenPair, user: user._id});
            res.json({
                ...tokenPair,
                user
            });
        } catch (e) {
            next(e);
        }
    }
};