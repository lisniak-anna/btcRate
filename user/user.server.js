const express = require('express');
require('dotenv').config({path: __dirname + '/.env'})
const usersRouter = require('./routes/user.router');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/user', usersRouter);

app.listen(3000, () => {
    console.log('Server running on 3000');
})
