const checkBooleanMiddleware = (req, res, next) => {
    if(req.headers.boolean === 'true'){
        next()
    } else {
        return res.send('boolean must be true');
    }
}

module.exports = checkBooleanMiddleware;