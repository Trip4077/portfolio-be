//Server
const express = require('express');
const server = express();

//Middleware
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

//Routes
const routes = require('../Routes/api');

server.use(
    logger('dev'),
    helmet(),
    cors(),
    express.json()
);

server.use('/', routes);

//Root Route
server.get('/', (req, res) => {
    res.status(200).json({ api: 'Server Running' });
});

module.exports = server;