const http = require("http");

const PORT = 30000;

const server = http.createServer(function listener() {});

server.listen(PORT, function exec() {
  console.log(`Server is running on PORT:${PORT}`);
});
