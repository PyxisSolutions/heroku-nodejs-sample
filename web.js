var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('books.html');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
