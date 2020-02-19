'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('All_Shows', [{
      city: faker.address.city(),
      address: faker.address.streetAddress(),
      date: faker.date.future(),
      duration: faker.random.number(),
      price: faker.random.number(),
      seats: faker.random.number(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },



  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('All_Shows', null, {});
  }
};
