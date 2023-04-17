const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'Home Page'});
});

router.get('/add_request', (req, res) => {
    res.render('add_request', {title: 'add request'});
});

router.get('/login', (req, res) => {
    res.render('login', {title: 'Login'});
});

router.get('/dashboard', (req, res) => {
    res.render('dash', {title: 'DashBoard'});
});

router.get('/view', (req, res) => {
    res.render('view', {title: 'View'});
});

module.exports = router;