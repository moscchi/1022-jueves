const jwt = require('jsonwebtoken');

const tokenValidate = async (req, res, next) => {
    const token = req.header('Authorization');
    if(!token) {
        return res.status(401).json({message: "Token invalido."})
    }
    try {
        const { username } = jwt.verify(token, process.env.SECRET_KEY);
        if(!username) {
            return res.status(401).json({message: "Token invalido."})
        }
        next();
    } catch (error) {
        return res.status(401).json({message: "Token invalido."})
    }
}

module.exports = { tokenValidate }