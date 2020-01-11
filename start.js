// server.js
const express = require('express');
const server = express();

//setting middleware
server.use(express.static(__dirname + '/main')); //Serves resources from public folder
server.use(express.static(__dirname + '/style'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});

server.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
 });