const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to my home page!");
  }
  if (req.url === "/about") {
    res.end("welcome to my about page");
  }
  res.end(`
    <h1>Oops</h1>
    <p>We can't seem to find the page that you are looking for.</p>
    <a href='/'>back home</a>
  `);
});

server.listen(3000);
