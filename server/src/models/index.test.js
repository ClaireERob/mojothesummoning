const { db } = require('../db/config');
const User = require('../models/User');
const Deck = require('../models/Deck');
const Card = require('../models/Card');
const Attack = require('../models/Attack');

let user, deck, card, attack;

// Clear db and create new user before tests
beforeAll(async () => {
    await db.sync({ force: true });
    user = await User.create({ username: 'gandalf' });
    deck = await Deck.create({ name: 'the fellowship', xp: 100 });
    card = await Card.create({
        title: 'Titan',
        mojo: 50,
        stamina: 80,
        imgUrl: "Pony"
    });
    attack = await Attack.create({
        title: 'Sucker punch',
        mojoCost: 30,
        staminaCost: 25
    })
});