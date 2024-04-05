const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Main - Structure')
  });

app.get('/structure', (req, res) => {
    res.send('structure')
  })

app.get('/markdown', (req, res) => {
    res.send('Markdown')
  })

app.listen(port, () => {  console.log('We are live on ' + port);});