const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('.')
const { sequelize } = require('../db/config')

// define in global scope
let attack


// clear db and create new user before tests
beforeAll(async () => {
  await sequelize.sync({ force: true })
  attack = await Attack.create({ 
    title: 'Sucker punch', 
    mojoCost: 30, 
    staminaCost: 25
})
})

// clear db after tests
afterAll(async () => {
    await sequelize.close(); 
}); 

describe('Attack', () => {
    it('has an id', async () => {
    expect(attack).toHaveProperty('id')
  })


    it('title is correct', async () => {
    expect(attack.title).toBe('Sucker punch');
   })

   it('mojoCost is correct', async () => {
    expect(attack.mojoCost).toBe(30);
   })

   it('stamina is correct', async () => {
    expect(attack.staminaCost).toBe(25);
   })


});