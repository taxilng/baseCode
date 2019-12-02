var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text-plain' });
    response.end('Hello World\n');
}).listen(8124);


// http.createServer(function (request, response) {
//     var body = [];

//     console.log(request.method);
//     console.log(request.headers);

//     request.on('data', function (chunk) {
//         body.push(chunk);
//     });

//     request.on('end', function () {
//         body = Buffer.concat(body);
//         console.log(body.toString());
//     });
//     response.end('Hello World\n');
// }).listen(80);


http.createServer(function (request, response) {
    console.log(request.headers)
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    request.on('data', function (chunk) {
        response.write(chunk);
    });

    request.on('end', function () {
        response.end('Hello World\n');
    });
}).listen(80);