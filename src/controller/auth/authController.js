const bcrypt = require('bcrypt')
const UsuarioModel = require("../../models/usuarios.models");
const { userRoles } = require("../../utils/enum/userRoles");
const { generateJWT } = require('../../utils/generateJWT');
require('dotenv').config();

const loginController = async (req, res) => {
    const { username, password } = req.body;

    // user va a ser o un Usuario o undefined.
    const user = await UsuarioModel.findOne({ username });
    if(!user){
        return res.status(400).json({message: 'Usuario y/o contraseña inválidos.'});
    } 
    const isValidPassword = bcrypt.compareSync(password, user.password);
    if(!isValidPassword){
        return res.status(400).json({message: 'Usuario y/o contraseña inválidos.'});
    }
    const token = generateJWT(username, user.rol);
    res.json({message: 'Login success', token: token})
}

const registerController = async (req, res) => {
    try {
    const { username, password, repeatPassword, rol, isActive, createAt } = req.body;
    if(password !== repeatPassword){
        return res.status(400).json({message: 'Las contraseñas no coinciden.'})
    } 
    const hashPassword = bcrypt.hashSync(password, 10)
    console.log(hashPassword)
    const newUser = new UsuarioModel({
        username,
        password: hashPassword,
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
}

module.exports = { loginController, registerController };