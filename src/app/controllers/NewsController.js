class NewsController {
    //[GET] /news  (đây là function handler)
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug  (giá trị nằm sau tuyến đường)
    show(req, res) {
        res.send('News detail!!');
    }
}

module.exports = new NewsController();
