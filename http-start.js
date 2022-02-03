// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("request event");
//   res.end("Hello World!");
// });

// server.listen(5000, () => {
//   console.log("Server listening on port : 5000...");
// });

const http = require("http");

// Using Event Emitter api

const server = http.createServer();
server.on("request", (req, res) => {
  res.end("Welcome!");
});

server.listen(3000);
