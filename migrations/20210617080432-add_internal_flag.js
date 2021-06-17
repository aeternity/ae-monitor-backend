'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
          'PeerSnapshots', // table name
          'internal', // new field name
          {
            type: Sequelize.BOOLEAN,
          },
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('PeerSnapshots', 'internal'),
    ]);
  }
};
