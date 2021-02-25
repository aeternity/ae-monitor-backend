'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'PeerSnapshots', // table name
        'ipProvider', // new field name
        {
          type: Sequelize.STRING,
        },
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('PeerSnapshots', 'ipProvider'),
    ]);
  }
};
