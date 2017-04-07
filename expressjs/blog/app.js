var express = require('express'),
//    morgan = require('morgan'),
    bodyParser=require('body-parser'),
    app = express(),
    connect = require('connect'),
    methodOverride = require('method-override'),
    post = require('./routes/post');

// ejsテンプレート読み込み用設定
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware : app.useで読み込まれるもの
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 // app.use(morgan('combined'));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

// routing
app.get('/', post.index); // 記事一覧を表示する(/でアクセスしたときにpost.index関数を呼び出す)
app.get('/posts/:id([0-9]+)', post.show);// ポストの詳細画面
app.get('/posts/new', post.new); // 新規作成
app.post('/posts/create', post.create); // 記事生成フォームをポストする
app.get('/posts/:id/edit', post.edit); // 更新する
app.post('/posts/:id', post.update); // フォームの更新
app.post('/posts/:id/delete', post.destroy); // 削除


app.listen(3000);
console.log("server starting...");

