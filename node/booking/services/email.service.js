const nodemailer = require('nodemailer');
const EmailTemplate = require('email-templates');
const path = require('node:path');

const {NO_REPLY_EMAIL, NO_REPLY_EMAIL_PASS, FRONTEND_URL} = require('../configs/variables');
const templatesInfo = require('../emailTemplates');
const { ServerError } = require('../errors/ApiError');

const sendMail = async (receiverEmail, emailType, locals = {}) => {
    const templateParser = new EmailTemplate({
        views:{
            root: path.join(global.rootPath, 'emailTemplates')
        }
    });

    const templateConfig = templatesInfo[emailType];

    if(!templateConfig){
        throw new ServerError('Wrong template name');
    }

    Object.assign(locals || {}, { frontendURL: FRONTEND_URL });

    const html = await templateParser.render(templateConfig.templateName, locals);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: NO_REPLY_EMAIL,
            pass: NO_REPLY_EMAIL_PASS,
        },
    });

    return transporter.sendMail({
        from: 'No reply Rocket2',
        to: receiverEmail,
        subject: templateConfig.subject,
        html
    });
};

module.exports = {
    sendMail
};