const { PeerSnapshot } = require('../../models')
const axios = require('axios');

const mapToDB = (peerId, peerData) => {
  return {
    peerId,
    firstSeen: peerData.first_seen,
    genesisHash: peerData.genesis_hash,
    host: peerData.host,
    lastSeen: peerData.last_seen,
    networkId: peerData.network_id,
    nodeOs: peerData.node_os,
    nodeRevision: peerData.node_revision,
    nodeVendor: peerData.node_vendor,
    nodeVersion: peerData.node_version,
    port: peerData.port,
    topDifficulty: peerData.top_difficulty,
    topHash: peerData.top_hash
  }
}

const batchUpdateDB = async (data) => {
  const newSnapshots = Object.keys(data)
    .map(peerId => mapToDB(peerId, data[peerId]))
  await PeerSnapshot.bulkCreate(newSnapshots)
}


setInterval(async () => {
  const result = await axios.get('http://localhost:3000/fakedata').then(res => res.data)
  await batchUpdateDB(result)
}, 1000)