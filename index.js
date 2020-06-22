const app = require('./src/app')
const env = require('./env.js')


// this guy connect with database
// require('./src/db.js')(env)

/** GET environment vars */
let { BACKEND_HOST , BACKEND_PORT  } = env

/** open and serve the api,  servir a api */
app.listen( BACKEND_PORT , BACKEND_HOST , _ => {
    console.log(`______servidor ${BACKEND_HOST} rodando na porta ${BACKEND_PORT}_________`)
})
