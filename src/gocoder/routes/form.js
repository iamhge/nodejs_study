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

// module.exports : global 전역으로 해당 라우터를 사용하게 해줌.
module.exports = router;