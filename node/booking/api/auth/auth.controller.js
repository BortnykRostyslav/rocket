const service = require('./auth.service');
const {oauthService, emailService} = require('../../services');
const {NO_CONTENT} = require('../../errors/errors.codes');
const {BANNED} = require('../../configs/emailTypes.enum');

module.exports = {
    loginUser: async (req, res, next) => {
        try {
            const user = req.locals.user;

            await emailService.sendMail('bortnikrostislav370@gmail.com', BANNED);
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
    },

    logoutUser: async (req, res, next) => {
        try {
            // const accessToken = req.get('Authorization');
            // await service.deleteOneByParams({accessToken});

            const accessToken = req.get('Authorization');
            await service.deleteManyByParams({user: req.user._id});
            res.status(NO_CONTENT).json('ok');
        } catch (e) {
            next(e);
        }
    }
};