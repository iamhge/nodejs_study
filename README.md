# nodejs_study
이 repo는 '아메리카노 한잔으로 배우는 Node.js Express 기본편' 책을 보고 따라하며 학습한 실습 코드와 내용 정리를 포함하고 있다.  

### 실습 환경
Ubuntu 20.04  
node.js v12.18.4  
npm v6.14.8
express

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


# 프로젝트 생성하기
프로젝트 생성할 폴더(`/nodejs_study/src/`)에서 다음 명령어 입력. 입력 후 `/nodejs_study/src/gocoder` DIR가 생성된다.
```shell
express gocoder
```

`/nodejs_study/src/gocoder`에서 다음 명령어를 통해 의존성 모듈 모두 설치. 설치 후 `/nodejs_study/src/gocoder/node_modules` DIR가 생성된다.
```shell
npm install
```
