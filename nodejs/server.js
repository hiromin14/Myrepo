var http = require("http");
var server = http.createServer(); 

server.on('request', function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('hello world ^0^!!');
	res.end();
});
server.listen(1337, '192.168.100.51');
console.log("server listening...");