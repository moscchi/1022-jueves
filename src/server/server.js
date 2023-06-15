const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')

const usuarioRouter = require('../routes/usuario/usuarioRoutes');
const petRouter = require('../routes/pet/petRoutes');
const authRouter = require('../routes/auth/authRoutes');
const routeError = require('../utils/middlewares/erroresMiddleware');
const server = express();

//Recordemos, en server configuramos al servidor.
server.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));
server.use(express.json());
server.use(cookieParser());

server.use('/user', usuarioRouter)
server.use('/auth', authRouter)
server.use('/pet', petRouter)
server.use(routeError);
module.exports = server;