'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', { 
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

      description: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
        unique: true
      },

      image: {
        type: Sequelize.DataTypes.STRING(400),
        allowNull: false,
      },

      active: {
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
    await queryInterface.dropTable('products');
  }
};
