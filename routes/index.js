var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'About MM' });
});

router.get('/cv', function(req, res, next) {
    res.render('cv', { title: 'About MM' });
});

router.get('/skills', function(req, res, next) {
    res.render('skills', { title: 'About MM' });
});

router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'About MM' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'About MM' });
});

router.get('/examples', function(req, res, next) {
    res.render('examples', { title: 'About MM' });
});


module.exports = router;
