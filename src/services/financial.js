function Financial() {
  /**
   * This function calculate the average fron array
   * @param {Array} numbers is a array of numbers
   */
  function calculateMedia(numbers) {
    let sum = 0;

    /** validate to check if have something in array */
    if (!numbers || numbers.length <= 0) {
      return 0;
    }

    /** add numbers to sum */
    sum = numbers.reduce(function (acc, actual) {
      if (isNaN(actual)) {
        throw new Error(`The value ${actual} is not a number`);
      }

      return acc + parseFloat(actual);
    }, 0);

    /** do the average */
    sum = sum / numbers.length;
    return sum;
  }
  /**
   * you pass the name,
   * @param {String} stockName
   * @param {Axios} axios or other request
   * @param {Int} limitOfDays, limit the
   * It will return a array of numbers that represent each stock day
   */
  async function getStockDaySeries (stockName, axios, limitOfDays = 260,stockDependencie = null) {

    /*validation*/
    if ( limitOfDays <= 0) {
      throw('Error number must be greater than 0')
      // return
    }

    /** get depedencies */
    const _stock = stockDependencie ? stockDependencie : require("./stocks");
    const stock = _stock(axios)
    const mode = require('./fetchStockModeTypes')

    /** api call */
    let days = await stock.getStockDays(stockName,mode.FULL);

    /** algoritmo para limitar a quantidade de items que o array vai retornar */
    let daysResponse = [];

    for (dayIndex = 0; dayIndex < limitOfDays; dayIndex++) {
      daysResponse.push(days[dayIndex] || 0);
    }

    return daysResponse;
  };

  /** return the Financial to public */
  return {
    calculateMedia,
    getStockDaySeries,
  };
}

module.exports = Financial;
