const toBR = require('../utils/stocksToBr')

module.exports = ( req,res,next) => {
  let isBR =  req.query.brMode || req.query.br

  if( isBR ){
    req.params.stock = toBR( req.params.stock ,true)
  }
  console.log("___TO_BR_MIDDLEWARE___ENABLED____")

  next()
}
