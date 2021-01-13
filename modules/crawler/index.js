const { PeerSnapshot, Batch } = require('../../models')
const axios = require('axios');

const mapToDB = (batchId, peerId, peerData) => {
  return {
    peerId,
    batchId,
    firstSeen: peerData.first_seen * 1000,
    genesisHash: peerData.genesis_hash,
    host: peerData.host,
    lastSeen: peerData.last_seen * 1000,
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

const batchUpdateDB = async (batchId, data) => {
  const newSnapshots = Object.keys(data)

    .map(peerId => mapToDB(batchId, peerId, data[peerId]))
  await PeerSnapshot.bulkCreate(newSnapshots)
}


setInterval(async () => {
  const batch = await Batch.create({})
  const result = await axios.get('https://mainnet-explorer.aeternity.art/v2/status/network')
    .then(res => res.data)
    .catch(e => {
      console.error(e);
      return null
    })
  await Batch.update({success: !!result}, {where: {id: batch.id}})
  if(result) {
    await batchUpdateDB(batch.id, result)
  }
}, 60000)