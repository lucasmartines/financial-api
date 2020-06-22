const app = require('../src/app.js')
const request = require('supertest')
const _ = require('lodash')
require('dotenv').config({
  path: '../.env.testing'
})


xdescribe('testing the route /stock' , () => {

  it('the stock/profit route, should return a response 200', async() => {

    return await request(app)
      .get('/stock/ITSA3.SA/profit')
      .expect('Content-Type',/json/)
      .expect( 200 )

  } )
  it('should return a response 404 for a wrong response', async() => {

    return await request(app)
      .get('/stock/ITSA3.SA/prfofit')
      .expect( 404 )

  } )
  it('should receive a object json with profit var ' , (done)=>{

    return request(app)
      .get('/stock/ITSA3.SA/profit')
      .expect('Content-Type',/json/)
      .expect( 200 )
      .then( res => {
        expect(res.body.profit).toBeTruthy()
        //expect( _.isNumber( res.body.profit ) ).toBeTruthy()
        done()
      })
  })
})
