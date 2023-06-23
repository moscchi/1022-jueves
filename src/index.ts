import server from './server';
require('dotenv').config();
import './config'
const PORT = 5000;

server.listen(PORT, () => {
    console.log('Server up in port ', PORT)
})
