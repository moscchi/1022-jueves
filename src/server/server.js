const express = require('express');
const router = require('../route/route');
const productRouter = require('../route/product/productRoute')
const userRouter = require('../route/user/userRoute');
const getHourMiddleware = require('../utils/getHourMiddleware');
const server = express();

server.use(express.json());
server.use(getHourMiddleware);
server.use('/api',router);
server.use('/api', productRouter)
server.use('/api/user', userRouter)
module.exports = server;