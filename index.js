let express = require('express')
let ejs = require("ejs")//追加

let app = express()

app.engine('ejs',ejs.renderFile)//追加

app.use(express.static('public'));//追加

let bodyParser = require('body-parser');//追加
app.use(bodyParser.urlencoded({extended: false}));//追加

let data = {
    'Taro':'taro@yamada',
    'Hanako':'hanako@flower',
    'Sachiko':'sachiko@happy',
    'Ichiro':'ichiro@baseball' 
};

//top page
app.get('/', (req, res) => {
   let msg = 'This is Index Page!<br>' 
   + 'データを表示します';
   let url = '/other?name=taro&pass=yamada';
    //index.ejsをレンダリング
res.render('index.ejs',
{
    title: 'Index' ,
    content: msg,
  　data:data,
});
});

 let server = app.listen(3000, () => {
    console.log('Start server runnning!') ;
})