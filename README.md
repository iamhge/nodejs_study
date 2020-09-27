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

# 미들웨어(middleware)
## 미들웨어란?
익스프레스는 미들웨어로 구성된 프레임 워크라고 할 수 있다.  
클라이언트 요청을 처리하여 응답하는 과정을 말한다.  
대표적인 경우 : 요청 객체, 응답 객체  
미들웨어를 실행하는 next함수로 이루어져 있다.  
```javascript
var express = require('express');
var app = express();

/*
    get        : 미들웨어 함수가 적용되는 HTTP 메소드
    '/'        : 미들웨어 함수가 적용되는 경로(route)
    function() : 미들웨어 함수.
    req        : 미들웨어 함수에 대한 HTTP 요청 인수
    res        : 미들웨어 함수에 대한 HTTP 응답 인수
    next       : 미들웨어 함수에 대한 콜백 인수
*/
app.get('/', function(req, res, next) {
    next();
})

app.listen(3003);
```

## 라우트
라우트 이후에 원하는 URI로 경로를 받을 수 있다.  
응용 프로그램의 사용자의 URI의 요청에 응답하는 방법을 라우팅이라한다.  
요청에 대한 컨트롤을 담당한다.  
```javascript
router.get('/list/:page',
```

* 접속 : http://사이트주소/gocoder  
```javascript
router.get('/gocoder', function(req, res){});
```

* 접속 : http://사이트주소/gocoder/itexpress
```javascript
router.get('/gocoder/itexpress', function(req, res){});
```

* 접속 : http://사이트주소/gocoder/itexpress/*(모든데이터)/
```javascript
router.get('/gocoder/itexpress/:id/', function(req, res){});
```

* 접속 : http://사이트주소/gocoder/itexpress/*(모든데이터)/*(모든데이터)
```javascript
router.get('/gocoder/itexpress/:id/:cate/', function(req, res){});
```

## req (요청 객체)
```javascript
function(req, res {}); // 여기에서 req
```

* 자주 사용하는 req 객체
```javascript
req.params  // 객체는 파라미터에 데이터를 가져온다.
req.query   // 쿼리스트링 파라미터에 전부를 가져온다.
req.headers // header 값 을 가져온다.
req.cookies // 쿠키값을 확인한다.
req.ip      // 프론트 아이피를 가져온다.
req.protoco // 프로토콜 http? https? 인지 가져온다.
req.url     // 전체 URI 정보를 가져온다.
```

## rew (응답 객체)
```javascript
function(req, res {}); // 여기에서 res
```

* 자주 사용하는 res 객체
```javascript
res.send     // 클라이언트에 응답을 보낼 수 있다.
res.json     // 클라이언트에 자동으로 json을 만들어준다.
res.jsonp    // 클라이언트에 자동으로 jsonp를 만들어준다.
res.redirect // 리다이렉트, 페이지를 이동시킨다.
res.ip       // 프론트 아이피를 가져온다.
```
