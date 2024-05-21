const Course = require('../models/Course');
class SiteController {
    //[GET] /
    index(req, res, next) {
        // try {
        //     const courses = await Course.find({});
        //     res.json(courses);
        // } catch (error) {
        //     res.status(400).json({ error: 'Error!' });
        // }

        Course.find({}).lean()
            .then((courses) => res.render('home', { courses }))
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
