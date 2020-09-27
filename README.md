# nodejs_study
이 repo는 '아메리카노 한잔으로 배우는 Node.js Express 기본편' 책을 보고 따라하며 학습한 실습 코드와 내용 정리를 포함하고 있다.

# Contents
* [1. Hello NodeJS](hello-nodejs)

# Hello NodeJS

index.js 파일 생성  
```javascript
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
```

실행
```shell
node index.js
```

인터넷 주소창에 `http://localhost:8000` 입력시 결과  
![hello_world](https://user-images.githubusercontent.com/59961690/94358469-27795400-00dc-11eb-865a-3fd23b5184bc.png)

