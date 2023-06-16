const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateJWT = (username, rol) => {
    const payload = { username, rol };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '4h'})
    return token
}

module.exports = { generateJWT }