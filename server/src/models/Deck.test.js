const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('.')
const db = require('../db/config')

// define in global scope
let deck

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await Deck.create({ name: 'The Fellowship', xp: 100 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Deck', () => {
    it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  })

    it('has an xp', async () => {
    expect(user).toHaveProperty('xp')
  })

    it('name is The Fellowship', async () => {
    expect(deck.name).toBe('The Fellowship');
   })

   it('xp is correct', async () => {
    expect(deck.xp).toBe(100);
   })

   it('xp can be updated', async () => {
    await deck.update({ xp: 200});
    expect(deck.xp).toBe(200);
   })


});