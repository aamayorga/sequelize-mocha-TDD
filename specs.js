const { expect } = require('chai');
const { db } = require('./app');
const { sequelize, User } = require('./models')
const app = require('supertest')(require('./app'));

describe('myapp22 TDD', ()=> {

  // TODO: Can't call syncAndSeed
  // beforeEach(
  //   app.syncAndSeed
  // )

  describe('API Tests', ()=> {

    describe('GET request', () => {

      // TODO: Test fails because it database creates the 'Users' table after this test runs
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


