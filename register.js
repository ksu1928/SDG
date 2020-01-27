const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
// https://github.com/jaewon4492/kakaoEmbed 오픈소스 라이브러리 참고
const kakaoEmbed = require('./kakaoEmbed');


const apiRouter = express.Router();

app.use(logger('dev', {}));
app.use(bodyParser.json());
//app.use('/api', apiRouter);


// 실제 스킬이 들어가는 부분.
// question_payment : 결제 관련된 문의사항 처리
apiRouter.post('/register', function(req, res) {
  // 카카오 오픈빌더 question스킬에 등록된 'contexts' 파라미터를 post방식으로 가져옴.
  //var intent = req.body.action.params['intent'];
  var u_key = req.body.userRequest.user.id;
  var u_kyogu = req.body.action.params['u_kyogu'];
  var u_team = req.body.action.params['u_team'];
  var u_group = req.body.action.params['u_group'];
  var u_gisu = req.body.action.params['u_gisu'];
  var u_name = req.body.action.params['u_name'];
  var result = null;
  var bar_url = "";
  var usrmsg = "";
  

//  let data = new kakaoEmbed();
//  data.addText("이해하지 못했습니다.");
//  result = data.output();

  // intent : 하고자 하는 의도
  // 1) what : 개념 설명
  // 2) error : 뭐가 안될 떄
  // 3) how : 어떻게 해야 하는 지에 대한 설명
  // 4) etc : 기타 등등

  //if(intent == "register"){
    var context = req.body.action.params['context'];
    u_barkey = '700003';
    bar_url = 'https://imgc.allpostersimages.com/img/print/u-g-Q10O35P0.jpg?w=900&h=900&p=0';
/*    var bar_url =  'http://www.mscollege.or.kr/kakao/barcode/barcode_image/barcode.php?id=' + u_barkey;
*/
    usrmsg = u_kyogu + '교구 ' + u_team + '팀 ' + u_group + '그룹 ' + u_name + '님의 바코드입니다';
    
    let data = new kakaEmbed();
    data.addBasicCard()
        .setCardTitle('모바일 바코드')
        .setCardDescription(usrmsg)
     .setCardThumbnail('https://imgc.allpostersimages.com/img/print/u-g-Q10O35P0.jpg')
        .addCardButton('크게보기', { action: 'weblink', webLinkUrl: bar_url})
    result = data.output();
  
//  }

  //console.log(result);

  res.status(200).send(result);
});

// 서버 실행
app.listen(3000, function() {
  console.log('Example skill server listening on port 3000!');
});
