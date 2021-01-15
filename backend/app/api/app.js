const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routes = require('./routes/index');
const initDatabase = require('../../database/initDatabase');
const errorhandler = require('./middlewares/errorHandler');

const app = express();

initDatabase();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/server', routes);
app.use(errorhandler);

module.exports = app;
