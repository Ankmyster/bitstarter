var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {

//var buf = new Buffer(fs.readFileSync('index.html'),'utf-8');
    //response.send(buf.toString())};
    response.send(fs.readFileSync('index.html').toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
