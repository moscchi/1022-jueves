const getHourMiddleware = (req, res, next) => {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    console.log(`Registro de solicitud de tipo ${req.method} a las ${hour}:${minutes}`);
    next();
}

module.exports = getHourMiddleware;