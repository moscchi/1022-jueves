const express = require('express');
const app = express();
const fsPromises = require('fs/promises');


//Codigo "dogmatico " (proximamente aprendemos que es) que hay que agregar
// Para que el servidor funcione correctamente:
app.use(express.json())


// Leer todos los items
app.get('/objeto', async (request, response) => {
    const objectsPlainText = await fsPromises.readFile('./db/database.txt');
    const objectsJSON = JSON.parse(objectsPlainText)
    response.json(objectsJSON)
})

// Leer un item por id.
app.get('/objeto/:idObjeto', async (request, response) => {
    // 1
    const { idObjeto } = request.params; 
    // 2
    const objectsPlainText = await fsPromises.readFile('./db/database.txt');
    const objectsJSON = JSON.parse(objectsPlainText);
    // 3
    const searchObject = objectsJSON.find(objectJson => objectJson.id === Number(idObjeto));
    // 4
    searchObject ? response.json(searchObject) : response.status(404).json({message: "Objeto no encontrado."})
})

// Agregar un nuevo objeto
app.post('/objeto', async (req, res) => {
    const objectBody = req.body;

    const objectsPlainText = await fsPromises.readFile('./db/database.txt');
    const objectsJSON = JSON.parse(objectsPlainText);
    const lastObject = objectsJSON.at(-1);
    const greatherId = lastObject.id+1;
    objectBody.id = greatherId;
    objectsJSON.push(objectBody);

    const objectsJSONToString = JSON.stringify(objectsJSON);
    await fsPromises.writeFile('./db/database.txt', objectsJSONToString);

    res.json({message: "Se agrego el objeto a la lista."})
})

// Actualizar. Pista: Aca hay que usar req.params y req.body
app.put('/objeto/:idObjeto', (req, res) => {
    //su codigo 
    
})
// Eliminar. Pista. Solamente obtengo el id del objeto
app.delete('/objeto/:idObjeto', (req, res) => {
    // su codigo
})
app.listen(8080, () => {
    console.log('Servidor levantado en puerto 8080');
})