const express = require('express')
const { sequelize, User } = require('./models')
const app = express()

app.use(express.json())

// app.set('port', 3000)
app.listen({ port: 3000}, async () => {
  console.log('Server up on http://localhost:3000')
  await sequelize.sync({ force: true })
  console.log('Database synced')
})

// sequelize.sync({ force: true })

app.post('/users',  (req, res, next) => {
  User.create(req.body)
    .then( result => res.status(201).send(result))
    .catch( err => {
      res.status(412).json({ msg: err.message })
      console.log("why tho")
      console.log(err.message)
    })
    .finally(next)
})

module.exports = app
