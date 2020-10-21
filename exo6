const http = require('http')
const [_node, _path, url] = process.argv;

http.get(url, (response) => {
    response.on('data', data => {
        console.log(data.toString());
    })
})
