'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PeerSnapshots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      batchId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Batches',
          key: 'id',
          as: 'batchId',
        }
      },
      peerId: {
        type: Sequelize.STRING
      },
      firstSeen: {
        type: Sequelize.DATE
      },
      genesisHash: {
        type: Sequelize.STRING
      },
      host: {
        type: Sequelize.STRING
      },
      lastSeen: {
        type: Sequelize.DATE
      },
      networkId: {
        type: Sequelize.STRING
      },
      nodeOs: {
        type: Sequelize.STRING
      },
      nodeRevision: {
        type: Sequelize.STRING
      },
      nodeVendor: {
        type: Sequelize.STRING
      },
      nodeVersion: {
        type: Sequelize.STRING
      },
      port: {
        type: Sequelize.INTEGER
      },
      topDifficulty: {
        type: Sequelize.STRING
      },
      topHash: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('PeerSnapshots');
  }
};