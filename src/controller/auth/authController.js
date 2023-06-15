const UsuarioModel = require("../../models/uruarios.models");
const { userRoles } = require("../../utils/enum/userRoles");
require('dotenv').config();

const loginController = async (req, res) => {
    const { username, password } = req.body;
    const tokenAdmin = process.env.TOKEN_ADMIN || '';
    const tokenUser = process.env.TOKEN_USER || '';
    // user va a ser o un Usuario o undefined.
    const user = await UsuarioModel.findOne({ username, password });
    if(!user){
        res.json({message: 'Usuario y/o contraseña inválidos.'});
    } else if(user && user.rol === userRoles.ADMIN_ROLE ) {
        res.cookie("token", tokenAdmin, {maxAge: 90000, secure:false, httpOnly: false})
        res.json({access_token: tokenAdmin});
    } else {
        res.cookie("token", tokenUser, {maxAge: 90000, secure:false, httpOnly: false})
        res.json({access_token: tokenUser})
    }
}

module.exports = { loginController };