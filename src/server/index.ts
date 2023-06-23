import express, { Request, Response } from 'express';
import router from '../routes/productRouter';

const server = express();

server.use(express.json());
server.get('/', (req: Request, res: Response) => {
    res.send('Hello world from my first server with TypeScript!');
});
server.use('/product', router)
export default server;