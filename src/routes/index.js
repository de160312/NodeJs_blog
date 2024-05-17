const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app) {

    app.use('/news', newsRouter)
    app.use('/', siteRouter)
    



    // app.get('/', (req, res) => { // có thể thay đổi '/' để định nghĩa url và được gọi là Routes
    //     res.render('home');
    // })

    // app.get('/search', (req, res) => {
    //     // console.log(req.query.q); // lay ra value cua tim kiem 
    //     //Query parameter sẽ là .query, còn form data sẽ là .body
    //     res.render('search');
    // })
}
module.exports = route