const service = require('./auth.service');
const {oauthService, emailService} = require('../../services');
const {NO_CONTENT} = require('../../errors/errors.codes');
const {BANNED, FORGOT_PASSWORD} = require('../../configs/emailTypes.enum');
const {FORGOT_PASSWORD: forgotPasswordAction} = require('../../configs/actionTokenTypes.enum');
const {FRONTEND_URL} = require('../../configs/variables');

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
    },

    sendForgotPasswordEmail: async (req, res, next) => {
        try {
            const user = req.locals.user;
            const forgotPasswordToken = oauthService.generateActionToken(
                forgotPasswordAction,
                {email: user.email}
            );

            await service.createActionToken({
                actionToken: forgotPasswordToken,
                token: forgotPasswordToken,
                user: req.locals.user._id
            });

            const forgotPassURL = `${FRONTEND_URL}/password/forgot?token=${forgotPasswordToken}`;

            await emailService.sendMail('bortnikrostislav370@gmail.com', FORGOT_PASSWORD,{forgotPassURL});

            res.json('ok')
        } catch (e) {
            next(e);
        }
    }
};