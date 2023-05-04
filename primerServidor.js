const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async (request, response) => {
  if (request.url === "/") {
    response.write("Bienvenidos a nuestro primer servidor :)");
    response.end();
  }
  if (request.url === "/hello") {
    try {
      const saludo = fs.readFile("./saludo.txt", "utf-8");
      console.log(saludo);
      response.write(saludo);
      response.end();
    } catch (error) {
        console.log('El error es: ', error);
      response.write("No se pudo leer el saludo");
      response.end();
    }
  }
  if (request.url === "/sobrescribir") {
    await fs.writeFile(
      "./saludo.txt",
      "Sobreescribiendo el archivo y no existe"
    );
    response.write("Archivo sobrescrito");
    response.end();
  }
  if (request.url === "/agregar-contenido") {
    await fs.appendFile("./saludo.txt", "\nAgregando contenido");
    response.write("Archivo actualizado");
    response.end();
  }
  if (request.url === "/borrar") {
    await fs.unlink("./saludo.txt");
    response.write("Archivo eliminado");
    response.end();
  }
  if (request.url === "/folder") {
    await fs.mkdir("folderrrr");
    response.write("Archivo eliminado");
    response.end();
  }
});

server.listen(8080);

console.log("Server listening on port 8080");
