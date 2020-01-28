const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();

app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

apiRouter.post('/test', function(req, res){
const u_name = req.body.action.params['u_name'];
const resBody = {
      "version": "2.0",
      "template": {
        "outputs": [
          {
            "basicCard": {
              "title": "모바일 바코드",
              "description": "$u_name의 바코드입니다",
              "thumbnail": {
                "imageUrl": "http://localhost/duckling.jpg"
              },
              "profile": {
                "imageUrl": "https://localhost/cloudhat.jpg",
                "nickname": "A HAT!"
              },
              "social": {
                "like": 1238,
                "comment": 8,
                "share": 780
              },
              "buttons": [
                {
                  "action":  "webLink",
                  "label": "확대하기",
                  "webLinkUrl": "https://i.kakao.com/docs/assets/skill/skill-basiccard-example.png"
                }
              ]
            }
          }
        ]
      }
    }
//    console.log(resBody);
               
    res.status(200).send(resBody);
})

