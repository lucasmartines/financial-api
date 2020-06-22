module.exports = ( req , res ,  next ) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers','Origin, X-Request-With, Content-Type, Accept, Authorization')
    
    next()
}
