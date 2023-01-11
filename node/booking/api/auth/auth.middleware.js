const {Unauthorized} = require('../../errors/ApiError');
const oathService = require('../../services/oauth.service');
const service = require('./auth.service');

module.exports = {
    validateAccessToken: async (req, res, next) => {
        try {
            const accessToken = req.get('Authorization');

            if (!accessToken) {
                throw new Unauthorized('No token');
            }

            oathService.validateAccessToken(accessToken);

            const info = await service.getByParams({accessToken});

            console.log(info);

            next();
        } catch (e) {
            next(e);
        }
    }
};