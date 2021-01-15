'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'PeerSnapshots', // table name
        'sourceNode', // new field name
        {
          type: Sequelize.STRING,
        },
      ),
      queryInterface.sequelize.query('UPDATE "PeerSnapshots" SET "sourceNode"=\'fra\'')
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('PeerSnapshots', 'sourceNode'),
    ]);
  }
};
