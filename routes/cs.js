/**
 * Created by Jun on 2015. 12. 23..
 */

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('cs_layout', {title: 'Now Panda', cstype: 'default'});
});

router.get('/notice', function (req, res, next) {
    res.render('cs_notice', {title: 'Now Panda', cstype: 'notice'});
});

router.get('/faq', function (req, res, next) {
    res.render('cs_faq', {title: 'Now Panda', cstype: 'faq'});
});

router.get('/email', function (req, res, next) {
    res.render('cs_email', {title: 'Now Panda', cstype: 'email'});
});

router.get('/terms', function (req, res, next) {
    res.render('cs_terms', {title: 'Now Panda', cstype: 'terms'});
});

router.get('/alliance', function (req, res, next) {
    res.render('cs_alliance', {title: 'Now Panda', cstype: 'alliance'});
});

module.exports = router;

