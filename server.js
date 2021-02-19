const express = require('express');
const server = express();

// Configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

server.get("/ideias", (req, res) => {
  res.sendFile(__dirname + "/ideias.html");
})
server.listen(3000);