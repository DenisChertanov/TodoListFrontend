const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
    console.log(request.method, request.url);
    if (request.url === '/style.css') {
        const css = fs.readFileSync('./public/style.css');
        response.end(css);
    } else if (request.url === '/images/to-do.png') {
        const img = fs.readFileSync('./public/images/to-do.png');
        response.end(img);
    } else {
        const html = fs.readFileSync('./public/index.html');
        response.end(html);
    }
});

server.listen(process.env.PORT || 3000);
console.log('Server started!');