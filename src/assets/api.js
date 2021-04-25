// port utilisé par le site
const port = 4201;

// instanciation du serveur
const express = require('express');
let fs = require('fs');
const app = express();
const server = require('http').createServer(app);

app.use(express.static(__dirname));

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

app.get('/textes', function (req, res) {
  const textes = require('./json/textesAll.json');
  res.status(200).json(textes);
})

app.get('/textes/:id', function (req, res) {
  const id = String(req.params.id);
  const textes = require('./json/textes' + id + '.json');
  res.status(200).json(textes);
});

server.listen(port, () => {
  console.log("let's go port : " + port);
});
