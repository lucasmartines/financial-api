const app = require('../src/app.js')
const request = require('supertest')
const _ = require('lodash')
require('dotenv').config({
  path: '../.env.testing'
})
const nock = require('nock')
const fakeData = require('./fakeResponseFinancialRoute.json')
describe('testing the route /stock' , () => {

  beforeEach( () => {

    nock('http://www.alphavantage.co')
       .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
       .filteringPath(function(path) {
          return '/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=T&apikey=API_KEY&outputsize=full';
        })
       .get(/query/)
       .reply(200, fakeData );

  })

  afterEach( () => {
    nock.cleanAll()
  })

  it('the stock/profit route, should return a response 200', (done) => {




    return request(app)
      .get('/stock/F/profit')
      .expect('Content-Type',/json/)
      .then( res => {

        expect( res.statusCode).toBe(200)
        expect( res.body.profit ).toBeDefined()
        done()
      })

  } )
  it('should return a response 404 for a wrong response', async() => {

    return await request(app)
      .get('/stock/F/prfofit')
      .expect( 404 )

  } )
  it('should receive a object json with profit var ' , (done)=>{

    return request(app)
      .get('/stock/F/profit')
      .expect('Content-Type',/json/)
      .expect( 200 )
      .then( res => {
        expect(res.body.profit).toBeTruthy()
        //expect( _.isNumber( res.body.profit ) ).toBeTruthy()
        done()
      })
  })
})
