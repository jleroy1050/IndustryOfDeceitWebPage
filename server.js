var http = require("http");

http.createServer(function(request, response) {
	console.log("request received");
	response.writeHead(200, {"Content-Type": "test/plain"});
	response.write("Hello World");
	response.end();
}).listen(8888)

console.log("Server has started.\n");