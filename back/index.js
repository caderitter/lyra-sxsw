const express = require('express');
var db = require('./db');


const app = express()
const port = 4000

var AuthController = require('./controllers/AuthController');
// var UserController = require('./controllers/UserController');
var PostController = require('./controllers/PostController');

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api/auth', AuthController);
// app.use('/api/users', UserController);
app.use('/api/posts', PostController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
