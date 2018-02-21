var http = require('http');
var fs = require('fs');
var text = "";
var i;

var server = http.createServer(function(req, res){
	fs.readdir('/treinamento/dia1_ex3/public/files', function(err, files){
  		
  		files.forEach(function(item, index, array) {
  			res.write(item);
  		});
		res.end();
  	});
});

server.listen(8181);

console.log("Servidor no ar! Digite CTRL+C para finalizar");
