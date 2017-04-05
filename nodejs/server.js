var http = require('http'),
	fs = require('fs'),
	ejs = require('ejs'),
	qs = require('querystring');
var settings = require('./settings');
//console.log(settings);
var server = http.createServer(); 
var template = fs.readFileSync(__dirname + '/public_html/bbs.ejs', 'utf-8');
var posts = [];

function renderForm(posts, res){
	var data = ejs.render(template, {
		posts: posts
	});
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
	res.end();
}

server.on('request', function(req, res) {
	if (req.method === 'POST') {
		req.data = "";
		req.on("readable", function() {
			req.data += req.read()||'';
		//	console.log("readable: " + req.data);
		});
		req.on("end", function() {
			var query = qs.parse(req.data);
			//console.log("end: " + query.name);
			if (query.name != "") {
				posts.push(query.name);
				renderForm(posts, res); 
			}
		});
	} else {
		//console.log("else");
		renderForm(posts, res);
	}
});
server.listen(settings.port, settings.host);
console.log("server listening...");