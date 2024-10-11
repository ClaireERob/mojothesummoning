const { User } = require('./User');
const { Deck } = require('./Deck');
const { Card } = require('./Card');
const { Attack } = require('./Attack');

// import the rest of your models above

// set up the associations here

Deck.belongsTo(User);
User.hasOne(Deck); 

Deck.hasMany(Card);
Card.belongsTo(Deck);

Card.belongsToMany(Attack, { through: 'CardAttacks'});
Attack.belongsToMany(Card, { through: 'CardAttacks'});


// and then export them all below
module.exports = { 
    User,
    Deck,
    Card,
    Attack
}
