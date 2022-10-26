'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Bootcamps', [
    {
     name: 'Mundo',
     description: 'Mi mundo es tuyo',
     webside: 'No sé',
     phone: 300-11-11,
     average_rating
     }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
