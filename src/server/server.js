const express = require('express');
const router = require('../routes/usuarioRoutes');
const server = express();

//Recordemos, en server configuramos al servidor.
server.use(express.json());

server.use(router)

module.exports = server;