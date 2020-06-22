const stocksToBr = require('./stocksToBr')

describe('testing stocksToBr',()=>{
  it('should return normal stock if isBr param is false or is omitted',()=>{
      expect(stocksToBr("STOCK_X")).toEqual('STOCK_X')
      expect(stocksToBr("STOCK_X",false)).toEqual('STOCK_X')
  })
  it('should return br stock or with .SA when it pass true ',()=>{
      expect(stocksToBr("STOCK_X",true)).toEqual('STOCK_X.SA')
  })
  it("shoud avoid error when developer get crazy and pass something wrong",()=>{
    expect(stocksToBr(null) ).toEqual("")
  })
  it("shoud avoid arr .SA in brmode if awearady exists .SA",()=>{
    expect(stocksToBr("STOCK_X.SA",true)).toEqual("STOCK_X.SA")
  })
})
