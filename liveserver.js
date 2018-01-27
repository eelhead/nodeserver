const http = require('http');

const PORT1 = 7000; 
const PORT2 = 7500;

const handleRequest = function(req, res) {

	res.end('Hey, you are awesome!!!', + req.url);
}

const server = http.createServer(handleRequest);

server.listen(PORT, () =>
	console.log('Server is listening on:' + PORT));





var http = require('http');

http.createServer(onRequest_a).listen(7000);
http.createServer(onRequest_b).listen(7500);

function onRequest_a (req, res) {
  res.write('You are AWESOME!!!\n');
  res.end();
}

function onRequest_b (req, res) {
  res.write('You cannot dance good!\n');
  res.end();
}