'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PeerSnapshot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PeerSnapshot.init({
    peerId: DataTypes.STRING,
    firstSeen: DataTypes.DATE,
    genesisHash: DataTypes.STRING,
    host: DataTypes.STRING,
    lastSeen: DataTypes.DATE,
    networkId: DataTypes.STRING,
    nodeOs: DataTypes.STRING,
    nodeRevision: DataTypes.STRING,
    nodeVendor: DataTypes.STRING,
    nodeVersion: DataTypes.STRING,
    port: DataTypes.NUMBER,
    topDifficulty: DataTypes.STRING,
    topHash: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PeerSnapshot',
  });
  return PeerSnapshot;
};