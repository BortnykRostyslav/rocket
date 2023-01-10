const rolesEnum = require('../configs/roles.enum');
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
        firstName: {type: String, trim: true, default: ' '},
        lastName: {type: String, trim: true, default: ' '},
        email: {type: String, trim: true, lowercase: true, required: true, unique: true},
        age: {type: Number,min: 8, max: 101, require: true},
        password: {type: String, min: 5, required: true},
        role: {type: String, enum: Object.values(rolesEnum), default: rolesEnum.USER}
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('User', UserSchema);