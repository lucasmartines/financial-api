const Financial = require("../services/financial");
const toBR = require('../middleware/toBr');


module.exports = (app) => {
  app.get("/", (req, res) => {
    res.json({ msg: "HELLO MOTO" });
  });

  app.post("/media", (req, res) => {
    /** import financial, instantiate */
    const financial = require("../services/financial")();
    const numbersList = req.body.numbers ? req.body.numbers : [];

    res.json({
      media: financial.calculateMedia(numbersList),
    });
  });

  app.get("/stock/:stock",toBR, async (req, res) => {

    const financial = require("../services/financial")();
    const axios = require("axios");

    try{
        let allDaysSeries = await financial.getStockDaySeries(
            req.params.stock,
            axios,
            req.query.days || 260
          );
        res.json(allDaysSeries);

    }
    catch( e ) {
        res.status(404).json( e )
    }

  });

  app.get("/stock/:stock/average",toBR, async (req, res) => {

    const financial = require("../services/financial")();
    const axios = require("axios");

    try{
        let allDaysSeries = await financial.getStockDaySeries(
            req.params.stock,
            axios,
            req.query.days || 260
          );

        let average = financial.calculateMedia( allDaysSeries )
        res.json({
          average:average
        });

    }
    catch( e ) {
        res.status(404).json( e )
    }

  });

  app.get('/stock/:stock/profit',toBR,async( req,res ) => {
    const financial = require("../services/financial")();
    const axios = require("axios");

    try{
        let allDaysSeries = await financial.getStockDaySeries(
            req.params.stock,
            axios,
            req.query.days || 260
          );


        let average = financial.calculateProfit( allDaysSeries[0] , allDaysSeries[ allDaysSeries.length - 1 ]  )

        res.json({
          profit:average
        });

    }
    catch( e ) {
        res.status(404).json( e )
    }

  })
};
