const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {BadRequest} = require('../errors/ApiError');

const hashPassword = (password) => bcrypt.hash(password, 10);

const checkPassword = async (hashedPassword, password) => {
    const isPasswordEquals = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordEquals) {
        throw new BadRequest('Email or password is wrong');
    }
};

module.exports = {
    hashPassword,
    checkPassword
};