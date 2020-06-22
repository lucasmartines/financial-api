
module.exports = function( promise ){
  return{
    getStockDays: jest.fn((whatever) => { return promise}   )
  }
}
