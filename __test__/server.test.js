import app from '../src/server/index.js'
import "regenerator-runtime/runtime";
const supertest = require('supertest')
const request = supertest(app)

it('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const res = await request.get('/test')
  
    // ...
    done()
  })