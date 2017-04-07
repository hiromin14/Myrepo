var express = require('express'),
    morgan = require('morgan'),
    bodyParser=require('body-parser'),
    app = express();

// ejsテンプレート読み込み用設定
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware : app.useで読み込まれるもの
// app.use(app.router); // 今のバージョンでは廃止されてる
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.urlencoded());
app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));

/*
// app.param : パラメータ対して共通の処理をしたいときに使う
app.param('id', (req, res, next, id) => {
    var users = ['hiromi', 'hazumu', 'hayato', 'taizo'];
    req.params.name = users[id];
    next(); // next()で処理の実行順を変えない
})
*/


app.get('/new', (req, res) => {
    res.render('new');
});
app.post('/create', (req, res) => {
    res.send(req.body.name);

});

/*
// 自作のmiddleware
app.use((req, res, next) => {
    console.log('my custom middleware!');
    next();
});
*/

/*
// ejs テンプレート読み込み
app.get('/', (req, res) => {
   res.render('index', {title: 'タイトルです'});
});
*/

/*
app.get('/', (req, res) => {
    res.send('hello world');
});
*/

/*
app.get('/users/:name?', (req, res) => {
    if(req.params.name){
        res.send('hello, ' + req.params.name);
    } else {
        res.send('hello, everyone!');
    }
});

app.get('/items/:id([0-9]+)', (req, res) => {
    if(req.params.id){
        res.send('item no: ' + req.params.id);
    }
});
*/

app.listen(3000);
console.log("server starting...");

