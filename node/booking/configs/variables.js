module.exports = {
    PORT: process.env.PORT || 3000,
    FRONTEND_URL: process.env.FRONTEND_URL || 'https://translate.google.com',
    MONGO_URL: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/rocket',
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'access_secret',
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'refresh_secret',

    NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL,
    NO_REPLY_EMAIL_PASS: process.env.NO_REPLY_EMAIL_PASS,
    SENDGRID_API_KEY: process.env.NO_REPLY_EMAIL_PASS,
};