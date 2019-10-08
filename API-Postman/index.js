var http = require('http');
var host = '127.0.0.1'
var port = 3000

const app=require('./app')

var server = http.createServer(app)

server.listen(port, host, (error) => {
    if (error) {
      return console.log('Error occured : ', error);
    }
  
    console.log('server is listening on ' + host + ':' + port);
  });
  
  

