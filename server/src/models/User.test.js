const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const User = require('./User')
const { sequelize } = require('../db/config')

// define in global scope
let user

// clear db and create new user before tests
beforeAll(async () => {
  await sequelize.sync({ force: true })
  user = await User.create({ username: 'gandalf' })
})

// clear db after tests
afterAll(async () => await sequelize.sync({ force: true }))

describe('User', () => {
  test('has an id', async () => {
    expect(user).toHaveProperty('id')
  })

   test('username is gandalf', async () => {
    expect(user.username).toEqual('gandalf');
   });

})
