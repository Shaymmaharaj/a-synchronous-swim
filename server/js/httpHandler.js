const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  // if (req.method === 'OPTIONS') {
  //   res.writeHead(200, headers);
  //   res.end();
  // }
  if (req.method === 'GET') {
    var directionArr = ['left', 'right', 'up', 'down'];
    var randomDirection = directionArr[Math.floor(Math.random() * directionArr.length)];
    res.writeHead(200, headers);
    res.end(randomDirection);

  }

  
};


