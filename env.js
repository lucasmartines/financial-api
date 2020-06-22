let{DB_HOST,DB_PORT,BACKEND_PORT,BACKEND_HOST , DB_NAME} = process.env

module.exports = {
    DB_PORT: DB_PORT ? DB_PORT : '27017',
    DB_HOST: DB_HOST ? DB_HOST : 'localhost',
    DB_NAME: DB_NAME ? DB_NAME : 'test-studies',
    /** this is port just for webpack-server */

    BACKEND_HOST: BACKEND_HOST ? BACKEND_HOST: 'localhost',
    BACKEND_PORT: BACKEND_PORT ? BACKEND_PORT : '9000'    

}
