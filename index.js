const express = require('express');
const app = express();
const port = 3000;
require('./modules/crawler');


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
