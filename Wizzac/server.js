var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Juegos de azar y mujerzuelas");
  response.end();
}).listen(996);