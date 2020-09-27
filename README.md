# nodejs_study
이 repo는 '아메리카노 한잔으로 배우는 Node.js Express 기본편' 책을 보고 따라하며 학습한 실습 코드와 내용 정리를 포함하고 있다.  

### 실습 환경
Ubuntu 20.04  
node.js v12.18.4  
npm v6.14.8  
express  
ejs  

# Contents

<!--ts-->

- [1. Hello NodeJS](#hello-nodejs)
- [2. 프로젝트 생성하기](#프로젝트-생성하기)
- [3. Hello Express](#hello-express)
- [4. ejs로 프로젝트 생성](#ejs로-프로젝트-생성)
<!--te-->

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
프로젝트 생성할 폴더(`/nodejs_study/src/`)에서 다음 명령어 입력.  
입력 후 `/nodejs_study/src/gocoder` DIR가 생성된다.
```shell
express gocoder
```

`/nodejs_study/src/gocoder`에서 다음 명령어를 통해 의존성 모듈 모두 설치.  
설치 후 `/nodejs_study/src/gocoder/node_modules` DIR가 생성된다.
```shell
npm install
```

# Hello Express
## Express 서버 실행
`/src/gocoder/`DIR에서 다음 명령어를 통해 서버를 실행.  
```shell
node ./bin/www
```

웹브라우저에서 `http://localhost:3000/` 주소로 접속시 결과  
![hello_express](https://user-images.githubusercontent.com/59961690/94359036-af149200-00df-11eb-86aa-6f1ee66b8eba.png)  

+) express는 기본 3000 port 사용.   

접속할 때마다 커맨드창에 log가 찍히는 것 확인 가능.  
![access_log](https://user-images.githubusercontent.com/59961690/94359089-f733b480-00df-11eb-83ad-939b843877c8.png)  


## 기본 포트 변경
`/src/gocoder/bin/www`파일의 다음 내용에서 3000을 원하는 port로 수정한다.  
수정 후, 해당 포트로 변경하여 웹브라우저에서 접속이 가능하다.  
```javascript
var port = normalizePort(process.env.PORT || '3000');
```

# ejs로 프로젝트 생성

위의 과정대로 수행시, `/src/gocoder/views/` DIR 내의 파일들이 jade 문법으로 작성되어있음을 볼 수 있다.  
협업에서는 ejs가 유용하므로, 지금까지 실습한 gocoder를 삭제하고, `/src/`에서 다음 명령어를 이용하여 ejs express 프로젝트를 생성한다.  
```shell
express --view=ejs gocoder
```
+) --view=ejs : ejs 뷰 엔진을 사용하겠다는 의미.  

프로젝트 생성 후, 다시 `/nodejs_study/src/gocoder`에서 다음 명령어를 통해 의존성 모듈 모두 설치.  
설치 후 `/nodejs_study/src/gocoder/node_modules` DIR가 생성된다.  
```shell
npm install
```

# Nodemon
## Nodemon 이란?
Node.js개발 시에 꼭 필요한 모듈.
역할 : 파일들을 모니터링하다 소스 수정 시 자동으로 서버를 재시작하여 곧바로 서버에 반영을 할 수 있는 도구.  

## Nodemon 설치
설치 명령어
```shell
npm install nodemon -g
```

## 커맨드 라인에서 Nodemon 실행 방법
수동으로 nodemon으로 서버를 시작할 수 있다.  
```shell
nodemon npm start
```