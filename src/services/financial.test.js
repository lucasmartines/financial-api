
jest.mock('./stocks' )

let Financial = require('./financial')



const _ = require('lodash')

describe('financial test getStockDaySeries' , () => {

  let getStockDays = jest.fn( (stockName) =>Promise.resolve([10,9,8]) )

  let financial  = Financial()
  let axios = require('axios')

  let mockStockMethod = ( axios ) => ({
      getStockDays
  })

  it('should return a list of stock numbers in array', async () => {

    let data = await financial.getStockDaySeries('fakeStock',
      axios ,
      20,
      mockStockMethod
    )

    expect(data).toBeTruthy()
  })
  it('should be a list of array', async () => {

    let data = await financial.getStockDaySeries('fakeStock',
      axios ,
      20,
      mockStockMethod
      )

    expect( _.isArray(data)).toBeTruthy()
  })
  it('shoud return a list of 10 day stocks in array', async() => {

    let data = await financial.getStockDaySeries('fakeStock',
      axios ,
      10,
      mockStockMethod
      )

    expect(data.length).toEqual(10)

  })
  it('should the lasts values of array be 0  if the data fron api is not enogh to fill then all', async()=>{

    let data = await financial.getStockDaySeries('fakeStock',
      axios ,
      100,
      mockStockMethod
      )

    expect(data[data.length - 1]).toEqual(0)
  })


  it('should return a array of zero when api is empty',  async () =>
  {
    let data = await financial.getStockDaySeries('fakeStock',
      axios ,
      100,
      mockStockMethod
      )

    expect( _.isArray(data)).toBeTruthy()
  })

  it('should call get stock days',  async () =>
  {
    let data = await financial.getStockDaySeries('fakeStock',
      axios ,
      20,
      mockStockMethod
    )

    expect( getStockDays ).toHaveBeenCalled()
  })
  it('should last parameter stockDependencie be opitional' , async () => {
    let data = await financial.getStockDaySeries('fakeStock',
      axios ,
      20
    )

    expect( data ).toBeTruthy()
  })
  it('should lunch error if user put 0 days', async() => {

    expect.assertions(1)

    return expect( financial.getStockDaySeries('fakeStock',
        axios ,
        0, // error
        mockStockMethod
      )
    ).rejects.toBeTruthy()

  })

  it('should lunch error if user put negative day', async() => {

    expect.assertions(1)

    return expect( financial.getStockDaySeries('fakeStock',
        axios ,
        -1, // error
        mockStockMethod
      )
    ).rejects.toBeTruthy()
  })
  it('should lunch error if getStockDays get an error', async()=>{
    expect.assertions(1)

    return expect( financial.getStockDaySeries('fakeStock',
        axios,
        10,
        (axios) => ({
          getStockDays: () => Promise.reject('I have buged for some reason')
        })
      )
    ).rejects.toEqual('I have buged for some reason')
  })
})
