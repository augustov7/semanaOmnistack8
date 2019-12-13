const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://augusto:augusto@cluster0-rhhng.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology: true
});

server.use(express.jason());

server.use(routes);

server.listen(3333);
