// require(instance) :  인스턴스 사용.
var express = require('express');
// express 프레임워크 라우터 사용.
var router = express.Router();

// 해당 form URI 안에서 루트로 들어올 때에 응답 방식 지정.
router.get('/', function(req, res, next) {
    // res.render : 해당 view 파일 렌더링.
    res.render('form', { 
        // ejs 템플릿으로 보내줄 변수를 선언하고 데이터를 담는다.
        name: 'Im Hae Gyeong',
        github: 'https://github.com/iamhge',
        lab: 'http://nclab.ssu.ac.kr/' 
    });
});

// method를 post로 전송
// 같은 루트로 접근된다고 하더라도 post인지 get인지에 따라 다르다.
router.post('/', function(req, res, next) {
    // 해당 데이터를 json함수가 자동으로 받아온 폼에 데이터를 json 형식으로 변경한다.
    res.json(req.body);
});

// module.exports : global 전역으로 해당 라우터를 사용하게 해줌.
module.exports = router;