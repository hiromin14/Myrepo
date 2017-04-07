var posts = [
    {title: '楽しかった！', body: '今日も１日楽しかった^0^'},
    {title: 'お腹が空きました', body: 'お菓子が食べたいです'},
    {title: '桜が咲きました', body: '満開でした〜'},
];

//exports関数 : 他のファイルから呼び出せる
exports.index = (req, res) => {
    res.render('posts/index', {posts: posts});
}
exports.show = (req, res) => {
//    console.log(req.params.id);
    res.render('posts/show', {post: posts[req.params.id]});
}
exports.new = (req, res) => {
    res.render('posts/new');
}

exports.create = (req, res) => {
//    console.log(req.body.title);
    var post = {
        title: req.body.title,
        body: req.body.body
    };
    posts.push(post);
    res.redirect('/');
}

exports.edit = (req, res) => {
    res.render('posts/edit', {post: posts[req.params.id], id: req.params.id});
}

exports.update = (req, res) => {
    posts[req.params.id] = {
        title: req.body.title,
        body: req.body.body
    };
    res.redirect('/');
}

exports.destroy = (req, res) => {
    posts.splice(req.params.id, 1);
    res.redirect('/');
}