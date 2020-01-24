var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');

var port = process.env.PORT || 5000
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//const apiRouter = express.Router();
//const kaemb = require('./test')

//app.use(logger('dev', {}));

//app.use('/api', apiRouter);

app.get('/keyboard', function (req, res){
        var data = {
        type: 'buttons',
        buttons: ['바코드','일정','식단']
        }
        res.json(data)
        })

app.post('/register', function (req, res){
         var msg = req.body.content
         var responseMsg
         switch (msg){
         case '바코드':
         responseMsg = {
         message: {
         text: '사용자의 바코드입니다.',
         photo: {
         url: 'barcode.png', width: 600, height: 400
         },
         message_button: {
         label: '잔액확인',
         url: 'a_mol_lang'
         }
         }
         }
         break
         
         case '일정':
         responseMsg = {
         message: {
         text: '예정 일정입니다.',
         photo: {
         url: 'schedule.png', width: 600, height: 400
         },
         message_button: {
         label: 'here',
         url: 'a_mol_lang2'
         }
         }
         }
         break
         
         default:
         responseMsg = {
         message: { text: '시정!'}
         
         }
         break
         }
         
         res.json(responseMsg)
         })

app.listen(port,function (){
           console.log(port + 'is running')
    })

/*
apiRouter.post('/register', function(req, res) {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "hello I'm Ryan"
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

apiRouter.post('/showHello', function(req, res) {
  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleImage: {
            imageUrl: "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
            altText: "hello I'm Ryan"
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

app.listen(3000, function() {
  console.log('Example skill server listening on port 3000!');
});

*/


