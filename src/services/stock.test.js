const financial = require("./financial");
const mockedData = require("./mockData.json");

describe("testing method getStockDays of stocks lib", () => {


  let StockService = require('./stocks')({
    get: () => Promise.resolve({ data: {
      "Error Message":"Some Dummy error fron api"
    }})
  })

  it("Should get an exception if user pass an invalid mode", async( )=>{
      expect.assertions(3)
      /*just expect the second paramether as: compact,full*/
      expect( StockService.getStockDays("STOCK_FAKE","ERROR")).rejects.toBeTruthy()
      expect( StockService.getStockDays("STOCK_FAKE",undefined)).rejects.toBeTruthy()
      expect( StockService.getStockDays("STOCK_FAKE",null)).rejects.toBeTruthy()
  })

  it('should launch an exception if the api send a error message', async() => {

    expect.assertions(1)
    return expect( StockService.getStockDays("STOCK_FAKE") ).rejects.toBeTruthy()
  })

  it("shoud receive a list of one stock ", async () => {
    const mockedData = require("./mockData.json");

    let Stocks = require("./stocks");
    let stocks = Stocks({
      get: () => Promise.resolve({ data: mockedData }),
    });

    let data = await stocks.getStockDays("STOCK_FAKE");

    expect(data).toBeTruthy()
    expect(data.length).toEqual(3)
  });

  it('Shoud return an exception when user dont find the stock', async()=>{

    let Stocks = require("./stocks");
    let stocks = Stocks({
        // get: () => { throw 'fail to get stock'}
        get: () => Promise.reject('error bug is impossible to get data from api')
    })

    try{
      await stocks.getStockDays()
    }
    catch( e ){
      expect(e).toBeTruthy()
     }
  })

  it('Shoud get an exception if user dont pass any stock name', async() => {
    const mockedData = require("./mockData.json");

    let Stocks = require("./stocks");

    let stocks = Stocks({
      get: () => Promise.resolve({ data: mockedData }),
    });

    try{
      await stocks.getStockDays()

    }
    catch( e ){
      expect(e).toBeTruthy()
      return
    }
    /*if i get here the test is not working correctly*/
    console.log('test is not passing')
    expect(true).toEqual(false)
  })






});
