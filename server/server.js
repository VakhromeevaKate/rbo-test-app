var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http \n');
});

fs.readFile('../src/data-input/data-auto.csv',null,function(error, response){
    console.log("responce: " + response);
});

server.listen(8080);