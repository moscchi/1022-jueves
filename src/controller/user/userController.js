const getUser = (req, res) => {
    // Aca va la logica del metodo
    res.send('Leyendo usuario')
};
const addUser = (req, res) => {
    // Aca va la logica del metodo
    res.send('Agregando usuario')
};
const getUserById = (req, res) => {
    const { idUser } = req.params
    const respuesta = 'Leyendo usuario con id ' + idUser
    res.send(respuesta)
};

module.exports = { getUser, addUser, getUserById }