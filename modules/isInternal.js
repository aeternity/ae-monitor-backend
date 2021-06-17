const internalIps = require('../config/internalNodesIPs')


function isInternal (entry) {
    return internalIps.includes(entry.host) || entry.ipProvider.includes('Amazon')
}


module.exports = {
    isInternal
}
