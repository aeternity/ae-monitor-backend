const axios = require('axios');

const cache = {};

const getIpMetaInfo = async (address) => {
  if (cache[address]) return cache[address];
  const result = await axios.get(`https://api.ipregistry.co/${address}?key=${process.env.IP_REGISTRY_KEY}`)
    .then(res => res.data)
    .catch(e => {
      console.error(e.message);
      return {
        connection: {
          organization: ''
        }
      }
    });
  cache[address] = result.connection.organization;
  return cache[address];
};

module.exports = {
  getIpMetaInfo,
};
