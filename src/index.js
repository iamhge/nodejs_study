// HTTP 모듈 로드
var http = require('http');

// HTTP 서버 구성
var server = http.createServer(function (request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
}) 

// listener port를 8000으로 지정
server.listen(8000);

// 로그 찍기
console.log("Server running at http://127.0.0.1:8000/");