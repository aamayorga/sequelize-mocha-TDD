const { expect } = require('chai');
const { db, syncAndSeed } = require('./models/index')
const app = require('supertest')(require('./app'));

describe('myapp22 TDD', ()=> {


  beforeEach(
    // TODO: Cannot read property 'create' of undefined (aka User model) when "syncAndSeed" is called
    syncAndSeed
  )

  describe('API Tests', ()=> {
    describe('GET request', () => {
      it('create user', () => {
        return app.post('/users')
          .send({
            name: "aName",
            email: "mail@mail.com",
            role: "aRole"
          })
          .expect(201)
          .then( response => {
            expect(response.body.name).to.equal("aName")
        })
      })
    })
  })
})


