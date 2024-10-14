const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('.')
const { sequelize } = require('../db/config')

// define in global scope
let deck

// clear db and create new user before tests
beforeAll(async () => {
  await sequelize.sync({ force: true })
  deck = await Deck.create({ name: 'The Fellowship', xp: 100 })
})

// clear db after tests
afterAll(async () => {
    await sequelize.close()
});

describe('Deck', () => {
    it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  })

    it('has an xp', async () => {
    expect(deck).toHaveProperty('xp')
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