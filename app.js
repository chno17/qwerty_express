const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname)));
app.get('/main', (req, res) => {
  res.sendFile(path.join(__dirname, 'main.html'));
});
app.listen(3000, () => {
  console.log('성공');
});
