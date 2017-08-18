// ya deux methode de faire :
//import fs from 'fs';
// la deuxiemme est:
let fs = require('fs');
//let hello = require('./deuxieme.js');
let doggo = require('./database.js');

let http = require('http');
let server = http.createServer(function(req, res) {
    res.end("Hello World");
});
server.listen(1337);
console.log("Serveur web lancé sur localhost:1337 ...");

//hello();


//console.log(fs);
fs.readFile(
    '/home/hayet/Documents/mon serveur',
    'utf-8',
    function(error, data) {
        console.log(data);
    }
);
console.log(doggo);