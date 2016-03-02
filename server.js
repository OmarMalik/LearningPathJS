var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var mongo = require('mongo');

app.set('views', path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function(req, res) {
  res.sendFile('public/index.html');
});

http.listen(8080, function() {
  console.log('Listening on port 8080');
});