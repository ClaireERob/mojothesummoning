const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('.')
const { sequelize } = require('../db/config')

// define in global scope
let card;


// clear db and create new user before tests
beforeAll(async () => {
  await sequelize.sync({ force: true })
  card = await Card.create({ 
    title: 'Titan', 
    mojo: 50, 
    stamina: 80, 
    imgUrl: "Pony" 
});
});

// clear db after tests
afterAll(async () => {
    await sequelize.close();
});

describe('Card', () => {
    it('has an id', async () => {
    expect(card).toHaveProperty('id')
  })


    it('title is correct', async () => {
    expect(card.title).toBe('Titan');
   })

   it('mojo is correct', async () => {
    expect(card.mojo).toBe(50);
   })

   it('mojo can be updated', async () => {
    await card.update({ mojo: 200});
    expect(card.mojo).toBe(200);
   })

   it('stamina is correct', async () => {
    expect(card.stamina).toBe(80);
   })

   it('stamina can be updated', async () => {
    await card.update({ stamina: 30});
    expect(card.stamina).toBe(30);
   })

});