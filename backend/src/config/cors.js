module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Origin', 'GET,POST,PUT,PATCH,DELETE')
    res.header('Access-Control-Allow-Origin', 'Origin, X-Request-With,Content-Type,Accept')
    next()
}