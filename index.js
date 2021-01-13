const express = require('express')
const app = express()
const port = 3000
require('./modules/crawler')
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/fakedata', (req, res) => {
  res.send({
    pp_21DNLk: {
      first_seen: 1610536456,
      genesis_hash: 'kh_pbt',
      host: '127.0.0.1',
      last_seen: Math.floor(Date.now() / 1000),
      network_id: 'ae_mainnet',
      node_os: 'unix:linux',
      node_revision: '98uawerzgffawrefg8aere798',
      node_vendor: 'Aeternity',
      node_version: '5.6.3',
      port: 3015,
      top_difficulty: 6612683660581720000,
      top_hash: 'kh_d4mb54adsfa6adsf'
    }
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
