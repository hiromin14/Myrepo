var express = require('express'),
    morgan = require('morgan'),
    app = express();

// ejsテンプレート読み込み用設定
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware : app.useで読み込まれるもの
// app.use(app.router); // 今のバージョンでは廃止されてる
app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));

/*
// 自作のmiddleware
app.use((req, res, next) => {
    console.log('my custom middleware!');
    next();
});
*/

app.get('/', (req, res) => {
   res.render('index', {title: 'タイトルです'});
})


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

