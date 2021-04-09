'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('Orders', [{
      total: 12.20,
      userId: 1,
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),     // delete the dot and everything after,
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
   }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
