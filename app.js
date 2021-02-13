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

// TODO Will not sync database if model isn't defined in the same file
// export const syncAndSeed = async () => {
//   await app.sync({ force: true })
//
//   const users = [
//     { name: "Joe", email: 'mail@mail.com', role: "Someone" }
//   ]
//
//   const [ joe ] = await Promise.all(users.map(user => User.create(user)))
//
//   return {
//     users: {
//       joe
//     }
//   }
// }

module.exports = app

// TODO: Doesn't export syncAndSeed and app for some reason
// module.exports = {
// app,
// syncAndSeed
// }

