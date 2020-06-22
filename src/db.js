const mongodb = require('mongoose')

module.exports = function ( env ) 
{

    let {DB_HOST,DB_PORT,DB_NAME} = env 

    /** connect with database */
    mongodb.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
    .then( _ => {
        console.log(`___Conected to Database:${DB_HOST}:${DB_PORT}__\n`)
    } )
    .catch( err => {
        console.error(`___FAIL TO CONNECT: ${DB_HOST}:${DB_PORT}___\n`,err)
    } )
}

