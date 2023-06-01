const UsuarioModel = require("../models/uruarios.models");

const addUserController = async (req, res) => {
  try {
    const { username, password, rol, isActive, createAt } = req.body;
    const newUser = new UsuarioModel({
      username,
      password,
      rol,
      isActive,
      createAt,
    });
    await newUser.save();
    res.json({ message: "User create has been succesfull" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: error.message + "No se ha podido crear el usuario" });
  }
};

const getUserController = async (req, res) => {
  try {
    const allUsers = await UsuarioModel.find();
    res.json(allUsers);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message: error.message + "No se ha podido acceder a los usuarios",
      });
  }
};

const getUserByUsernameController = async (req, res) => {
    try {
        const { username } = req.params;
    const user = await UsuarioModel.findOne({username})
    if(!user) return res.status(404).json({message: `Usuario con el username '${username}' no encontrado`})
    res.json(user)
    } catch (error) {
        console.error(error);
    res
      .status(500)
      .json({
        message: error.message + "No se ha podido acceder a los usuarios",
      });
    }
}
module.exports = { addUserController,getUserController, getUserByUsernameController };
