function StockService(request) {
  this.request = request;

  const apiKey = process.env.API_DATA;

  const mode = require('./fetchStockModeTypes')
  /***
   *  get stock data passing name and mode, it do a request to alpha vantage api
   *  @param {String } stockName , is the name of stock if is a 'br stock' itsa3 ,you shoud put example:  itsa3.sa
   *  @param {String} Mode can be [ full or compact ]
   *  @returns { Array }, It return array of adjusted close values like [10,25.5,12.6] , parsed to float
   */
  const getStockDays = async (stockName, _mode = "compact") => {

    if(!stockName){
      throw "Error stockName cannot be null"
    }

    if( !_mode || (_mode  !== mode.COMPACT && _mode !== mode.FULL )){
      throw "Error the _mode param is is invalid you should pass compact or full"
    }



    try
    {

      const connectionString = `http://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockName}&apikey=${apiKey}&outputsize=${_mode}`

    //  console.log(connectionString)
      let  res  = await this.request.get( connectionString );

      if(res.data['Error Message']){
        throw res.data['Error Message']
        // return
      }
       let normalizedData = Object.keys(res.data["Time Series (Daily)"]).map((key) =>
        parseFloat(res.data["Time Series (Daily)"][key]["5. adjusted close"])
      );
      return normalizedData;
    }
    catch(e){
      throw 'Error in get stock days, probaly was not possible to fetch this, maybe it not exists ' + stockName+': ' + e
    }



};

  return {
    getStockDays,
    mode,
  };
}

module.exports = StockService;
