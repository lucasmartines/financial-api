let Financial = require('./financial')
let financial  = Financial()
let _ = require('lodash')

describe( 'profit calculation', () => {
  it('should calculate profit and retriev a number that represent percentage example if i pass 10 , 20 user have envolved 100%', () => {

    expect( financial.calculateProfit(10,20) ).toEqual(100)

  })

  it('Should lunch a error if the first paramether "start" is null or undefined',() => {
    expect( () => financial.calculateProfit( null , 20) ).toThrow()
  })

  it('should support text values',()=>{
    expect( _.isNumber( financial.calculateProfit("10","20") ) ).toBeTruthy()
    expect( _.isNumber( financial.calculateProfit(10,"20") ) ).toBeTruthy()
    expect( _.isNumber( financial.calculateProfit("10",20) ) ).toBeTruthy()

    expect(  financial.calculateProfit("10","20")  ).toEqual(100)
    expect(  financial.calculateProfit(10,"20")  ).toEqual(100)
    expect(  financial.calculateProfit("10",20)  ).toEqual(100)
  })
  xit('should work with float', () => {
    expect( financial.calculateProfit(5,20) ).toEqual(100)

  })

})
