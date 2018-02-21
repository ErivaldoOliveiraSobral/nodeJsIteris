var http = require('http');
var fs = require('fs');

server = http.createServer(function(req, res) {
	fs.readFile('index.html', function(err, data) {
		res.write(data);
		res.end();
	});
});

server.listen(8181);

console.log("Servidor no ar! Digite CTRL+C para finalizar");
