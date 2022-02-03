const http = require("http");
const { readFileSync } = require("fs");

http
  .createServer((req, res) => {
    const text = readFileSync("./content/bigFile.txt", "utf8");
    res.end(text);
  })
  .listen(3000);
