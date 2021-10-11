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
    } else if (request.url === '/index.html') {
        const html = fs.readFileSync('./public/index.html');
        response.end(html);
    } else if (request.url === '/test.js') {
        const js = fs.readFileSync('./public/test/test.js');
        response.end(js);
    } else if (request.url === '/main.js') {
        const js = fs.readFileSync('./public/main.js');
        response.end(js);
    } else if (request.url === '/dashboards.html') {
        const html = fs.readFileSync('./public/dashboards/dashboards.html');
        response.end(html);
    } else if (request.url === '/dashboards.css') {
        const css = fs.readFileSync('./public/dashboards/dashboards.css');
        response.end(css);
    } else if (request.url === '/dashboards.js') {
        const js = fs.readFileSync('./public/dashboards/dashboards.js');
        response.end(js);
    } else {
        const html = fs.readFileSync('./public/test/test.html');
        response.end(html);
    }
});

server.listen(process.env.PORT || 3000);
console.log('Server started!');