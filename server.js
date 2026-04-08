// import module
const http = require("http");
const fs = require("fs");
const path = require("path");

// create sever
// request => incoming data
// response => outgoing data
// send hello world on browsers
const server = http.createServer((request, response) => {
  // response.writeHead(200, { "Content-Type": "text/html" });

  const path = "./public/index.html";
  fs.readFile(path, (err, data) => {
    console.log(err);
    if (err) {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.write(`{"message": "File not found!"}`);
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      // response.write(data);
      response.write("Hello from deepakkumar");
    }
    return response.end();
  });
  // response.write(`{"message": "Hello World!"}`); // send data to browser
  //response.end(); // close connection with server
});

// add port number
server.listen(3001, () => {
  console.log("server started");
});

// status codes
// 200 => success
// 404 => not found
// 400 => bad request
// 401 => unauthorized
// 403 => forbidden
// 500 => internal server error
// 502 => bad gateway
// 503 => service unavailable
