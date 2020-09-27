// require(instance) :  인스턴스 사용.
var express = require('express');
// express 프레임워크 라우터 사용.
var router = express.Router();

// 해당 form URI 안에서 루트로 들어올 때에 응답 방식 지정.
router.get('/', function(req, res, next) {
    // res.render : 해당 view 파일 렌더링.
    res.render('form', { title:'Form 테스트'});
});

// module.exports : global 전역으로 해당 라우터를 사용하게 해줌.
module.exports = router;