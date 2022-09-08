'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      name: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },

      email: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
        unique: true
      },

      password: {
        type: Sequelize.DataTypes.STRING(400),
        allowNull: false,
      },

      isAdmin: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
      },

      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      },

      updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      },

      deleted_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};