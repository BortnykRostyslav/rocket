const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fileUpload = require('express-fileupload');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config({path: path.join(__dirname, 'env', `.env.${process.env.NODE_ENV || 'local'}`)});
global.rootPath = __dirname;


const mainRouter = require('./api/api.router');
const {PORT, MONGO_URL} = require('./configs/variables');
const {SERVER_ERROR} = require('./errors/errors.codes');
const {NotFound} = require('./errors/ApiError');
const swaggerDocument = require('./swagger.json');

const app = express();


mongoose.set('debug', true);
mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URL);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(fileUpload({
    limits: { fileSize: 200 * 1024 * 1024 },
}));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', mainRouter);
app.use('*', _notFoundError);
app.use(_mainErrorHandler);

app.listen(PORT, () => {
    console.log('Listen', PORT);
    require('./cronJobs');
});


function _notFoundError(req, res, next) {
    next(new NotFound('Route not found'));
}

function _mainErrorHandler(err, req, res, next) {
    res
        .status(err.status || SERVER_ERROR)
        .json({
            message: err.message || 'Unknown error'
        });
}