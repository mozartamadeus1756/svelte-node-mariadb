const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(80, err => {
    if(err){console.log('server cannot listen'); return}
    console.log('server listening')
});  