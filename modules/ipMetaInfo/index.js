const axios = require('axios');

const cache = {};

const getIpMetaInfo = async (address) => {
  if (cache[address]) return cache[address];
  return await axios.get(`https://api.ipregistry.co/${address}?key=${process.env.IP_REGISTRY_KEY}`)
    .then(res => {
      cache[address] = res.data.connection.organization;
      return res.data.connection.organization
    })
    .catch(e => {
      console.error('ipregistry.io query failed with ' + e.message);
      return '';
    });
};

module.exports = {
  getIpMetaInfo,
};
