const http = require('http');
const fs = require('fs');
const [_node, _path, port, url] = process.argv;

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/plain' });

    fs.createReadStream(url).pipe(response);
})

server.listen(port);
