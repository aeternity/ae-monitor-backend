'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addIndex('PeerSnapshots', ['batchId','lastSeen', 'ipProvider', 'peerId', 'createdAt']);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('PeerSnapshots', ['batchId','lastSeen', 'ipProvider', 'peerId', 'createdAt']);
  }
};
