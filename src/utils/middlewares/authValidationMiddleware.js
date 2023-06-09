require('dotenv').config();

const authValidationMiddleware = (req, res, next) => {
    const { token } = req.headers;
    if(token === process.env.TOKEN_ADMIN || token === process.env.TOKEN_USER) {
      next()
    } else {
        return res.status(401).json({ message: 'Usted no está autorizado a realizar esta acción.'})
    }
}
const authAdminValidationMiddleware = (req, res, next) => {
    const { token } = req.headers;
    if(token === process.env.TOKEN_ADMIN) {
      next()
    } else {
        return res.status(401).json({ message: 'Usted no está autorizado a realizar esta acción.'})
    }
}

module.exports = { authValidationMiddleware, authAdminValidationMiddleware }