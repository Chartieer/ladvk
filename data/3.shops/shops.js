const faker = require('faker')

const json = [
  {
    name: 'San Francisco',
    owner: '5aa1c2c35ef7a4e97b5e995a',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    name: 'Shopshop',
    owner: '5c1ced088f39b02168b631be',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    name: 'ShopShopShop',
    owner: '5c1ced088f39b02168b631be',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]

// for (let i = 0; i < 100; i++) {
//   const tmp = {
//     name: faker.random.words(),
//     createdAt: faker.date.past(),
//     updatedAt: faker.date.recent()
//   }
//   json.push(tmp)
// }

module.exports = json
