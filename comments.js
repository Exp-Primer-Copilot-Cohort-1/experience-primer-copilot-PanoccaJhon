//create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
var comments = require('./comments.json');

//to read the body of the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//to serve static files
app.use(express.static(path.join(__dirname, 'public')));

//get the comments
app.get('/api/comments', function(req, res) {
  res.json(comments);
});

//post a comment
app.post('/api/comments', function(req, res) {
  var comment = {
    id: Date.now(),