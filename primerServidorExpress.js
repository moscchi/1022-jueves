// Requerimos al módulo y llamamos a su función guardandolo en la constante app
const express = require('express');
const app = express();

// Creamos los métodos que tendrá el servidor.

app.get('/', (request, response) => {
    response.send('Bienvenidos a mi primer servidor con express :)');
});

app.get('/primer-servidor', (request, response) => {
    response.send('Primer server :)')
});
app.get('/static-file', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})
// Ponemos a nuestro servidor a escuchar en el puerto 8080.
app.listen(8080, () => {
    console.log('Servidor funcionando en puerto 8080');
})