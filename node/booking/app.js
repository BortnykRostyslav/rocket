require('module-alias/register');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const path = require('path');
const socketIO = require('socket.io');
const fileUpload = require('express-fileupload');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config({path: path.join(__dirname, 'env', `.env.${process.env.NODE_ENV || 'local'}`)});
global.rootPath = __dirname;

const mainRouter = require('./api/api.router');
const {PORT, MONGO_URL} = require('@configs/variables');
const {SERVER_ERROR} = require('./errors/errors.codes');
const {NotFound} = require('@error');
const swaggerDocument = require('./swagger.json');
const app = express();

const server = http.createServer(app);

const io = socketIO(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
    console.log(socket.id);
    console.log(socket.handshake);

    socket.on('send', (data) => {
        console.log(data);

        //SEND ON TO ONE
        socket.emit('newMessage', { ok: true });
    });

    socket.on('getBroadcast', () => {
        //SEND FOR ALL CONNECTED CLIENTS
        // io.emit('forall', 'TEST');

        //FOR ALL EXCEPT SENDER
        socket.broadcast.emit('forall', 'I CANT SEE THIS');
    });

    socket.on('room:join', (roomData) => {
        socket.join(roomData.roomId);

        // SEND TO ROOM CLIENTS EXPECT SENDER
        // socket.to(roomData.roomId).emit('room:newUser', socket.id);

        // SEND TO ROOM ALL ROOM CLIENTS
        io.to(roomData.roomId).emit('room:newUser', socket.id);
    });

});

mongoose.set('debug', true);
mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URL);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(fileUpload({
    limits: { fileSize: 200 * 1024 * 1024 },
}));

if(process.env.NODE_ENV !== 'prod'){
    const morgan = require('morgan');

    app.use(morgan('dev'));
}


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', mainRouter);
app.use('*', _notFoundError);
app.use(_mainErrorHandler);

server.listen(PORT, () => {
    console.log('Listen', PORT);
    // require('./cronJobs');
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