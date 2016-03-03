var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var assert = require('assert');
var bodyParser = require('body-parser');
var Topic = require('./schema/TopicSchema');

app.set('views', path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // for parsing application/json

// DATABASE
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/learningpath');

Topic.find(function(err, topics) {
	console.log(topics);
});

// ROUTES
app.get('/', function(req, res) {
  res.sendFile('public/index.html');
});

// TOPIC ROUTES
app.get('/topics', function(req, res) {
  Topic.find(function(err, topics) {
    console.log(topics);
    res.send({topics: topics});
  });
});

app.get('/topics/:title', function(req, res) {
  Topic.findOne({'title': req.params.title}, function(err, topic) {
    console.log('topic found', topic);
    res.send({topic: topic});
  });
});

app.post('/topics', function(req, res) {
  var topic = new Topic({title: req.body.title});

  Topic.findOne({'title': req.body.title}, function(err, topic) {
    if(topic) {
      return res.send({
        success: false,
        reason: 'Topic exists'
      });
    }
    return topic.save(function(err, topic) {
      if(err) 
        res.send({success: false});
      res.send({success: true});
    });
  });  
});

// START SERVER
http.listen(8080, function() {
  console.log('Listening on port 8080');
});