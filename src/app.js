const server = require('./server/server')

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});