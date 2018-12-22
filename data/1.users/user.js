const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

module.exports = [
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5e995a'),
    name: 'Super Administrator',
    email: 'admin@admin.com',
    password: '$2a$05$2KOSBnbb0r.0TmMrvefbluTOB735rF/KRZb4pmda4PdvU9iDvUB26', // 12345
    role: 'admin',
    verified: true,
    friends: [],
    urlTwitter: faker.internet.url(),
    urlGitHub: faker.internet.url(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },

  {
    _id: new ObjectID('5c1ced088f39b02168b631be'),
    name: 'Shop USer',
    email: 'owner@shop.com',
    password: '$2a$05$2KOSBnbb0r.0TmMrvefbluTOB735rF/KRZb4pmda4PdvU9iDvUB26', // 12345
    role: 'user',
    verified: true,
    friends: [],
    urlTwitter: faker.internet.url(),
    urlGitHub: faker.internet.url(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]
