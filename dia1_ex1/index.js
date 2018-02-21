//console.log("Hello World");

var http = require('http');
var server = http.createServer(function(req, res){
	res.end("<html><head><title>Treinamento NodeJs</title></head><body><h1>Hello World!</h1></body></html>");
});

server.listen(8181);

console.log("Servidor no ar! Digite CTRL+C para finalizar");