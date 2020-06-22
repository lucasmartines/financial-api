module.exports = function( stock , isBr = false ){
  stock = stock ? stock : ""


  if( isBr ){
    let ExistsSAinStock = new RegExp(/\.SA/i).test(stock)

    if( !ExistsSAinStock ){
      stock+= ".SA"
    }

  }

  return stock
}
