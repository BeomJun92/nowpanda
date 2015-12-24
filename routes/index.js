var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('landing', {title: 'Now Panda'});
});

router.get('/order', function (req, res, next) {
    res.render('item-view', {title: 'Now Panda'});
});

router.get('/shoes', function (req, res, next) {
    res.render('shoes', {title: 'Now Panda'});
});

router.get('/login', function (req, res, next) {
    res.render('login', {title: 'Now Panda'});
});

router.get('/signup', function (req, res, next) {
    res.render('signup', {title: 'Now Panda'});
});

module.exports = router;
