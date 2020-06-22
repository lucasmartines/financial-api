const app = require('express')()



/** config body parser and get suport for json */
    var bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

/** load the power of cors and 'higher level of security ...' */
    const cors = require('./middleware/cors')
    app.use(cors)

/** financial route  */
    require('./routes/financialRoute')(app)


module.exports = app