const app = require('./server/server')
require('dotenv').config();
require('./database/db')

const PORT = process.env.PORT || 5000;

app.listen(8080, () => {
    console.log(`Servidor levantado en puerto ${PORT}`);
})