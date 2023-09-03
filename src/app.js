const express = require('express');
const morgan = require('morgan');
const {default: helmet} = require('helmet');
const compression = require('compression');
const app = express();

// init middlewares
app.use(morgan("combined"));
app.use(helmet()) // Protect your server from dangerous parties ex : access your cookies
app.use(compression()) // Zip your file to minimize file's size.

// init db

// init routers
app.get('/', function(req, res,next) {
    const strCompress = 'Hello JS'
    return res.status(200).json({
        message: 'Hello world!',
        metadata : strCompress.repeat(10000)
    })
});

// handling errors

module.exports = app; // export module 