const {Schema, model} = require('mongoose');
const rolesEnum = require('../configs/roles.enum');


const UserSchema = new Schema({
        firstName: {type: String, trim: true, default: ''},
        lastName: {type: String, trim: true, default: ''},
        email: {type: String, trim: true, lowercase: true, required: true, unique: true},
        age: {type: Number},
        password: {type: String, min: 5, required: true},
        role: {type: String, enum: Object.values(rolesEnum), default: rolesEnum.USER}
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model('User', UserSchema);