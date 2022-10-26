'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('users', [{
      username: 'Goku',
      email: 'goku26@misena.edu.co',
      password: 'gokussj3'
     },
     {
      username: 'Vegeta',
      email: 'vegeta26@misena.edu.co',
      password: 'vegetassj3'
     },
     {
      username: 'Picolo',
      email: 'picolo32@misena.edu.co',
      password: 'picolo12'
     },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('users', null, {});
     
  }
};
