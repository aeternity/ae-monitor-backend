const { PeerSnapshot, Batch } = require('../../models')
const axios = require('axios');
const nodes = require('../../config/nodes')

const mapToDB = (batchId, peerId, nodeId, peerData) => {
  return {
    peerId,
    batchId,
    sourceNode: nodeId,
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

const batchUpdateDB = async (newSnapshots) => {
  await PeerSnapshot.bulkCreate(newSnapshots.flat())
}

setInterval(async () => {
  const batch = await Batch.create({})
  const results = await Promise.all(nodes.map(async ({ nodeId, url }) => axios.get(url)
    .then(res => Object.keys(res.data).map(peerId => mapToDB(batch.id, peerId, nodeId, res.data[peerId])))
    .catch(e => {
      console.error(`Query for node ${nodeId} failed with: ${e.message}`);
      return []
    })));

  const success = results.some(result => result.length > 0)
  await Batch.update({success: success}, {where: {id: batch.id}})

  if(success) {
    await batchUpdateDB(results)
  }
}, 60000)