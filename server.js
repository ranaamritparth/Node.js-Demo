var http = require("http");
var fs = require("fs");
var path = require("path");
//var mime = require("mime");

function sendError(response) {
  response.writeHead(404, {"Content-type" : "text/plain"});
  response.write("Error 404: resource not found");
  response.end();
}

function sendPage(response, filePath, fileContents) {
  //response.writeHead(200, {"Content-type" : mime.lookup(path.basename(filePath))});
  // or
  response.writeHead(200, {"Content-type" : "text/html"});
  response.end(fileContents);
}

function serverAction(response, absPath) {
  fs.exists(absPath, function(exists) {
    if (exists) {
      fs.readFile(absPath, function(err, data) {
        if (err) {
          sendError(response)
        } else {
          sendPage(response, absPath, data);
        }
      });
    } else {
      sendError(response);
    }
  });
}

var server = http.createServer(function(request, response) {
  var filePath = false;

  if (request.url == '/') {
    filePath = "demo/index.html";
  } else {
    filePath = "demo" + request.url;
  }
  var absPath = "./" + filePath;
  serverAction(response, absPath);
}).listen(80);