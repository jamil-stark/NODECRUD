const express = require('express');
const router = express.Router();
const Message = require('../models/messages');
const multer = require('multer');

//image uplaod 
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});

var uplaod = multer({
    storage: storage,
}).single('image');

//insert request || message
router.post('/add_request', uplaod, (req, res) => {
    const message = new Message({
        name: req.body.name,
        email: req.body.email,
        image: req.file.filename,
        message: req.body.message
    });
    message.save()
        .then(() => {
            req.session.message = {
                type: 'success',
                message: 'User added!'
            };
            res.redirect('/');
        })
        .catch((err) => {
            res.json({message: err.message, type: 'danger'});
        });
});


router.get('/', (req, res) => {
    res.render('index', {title: 'Home Page'});
});

router.get('/add_request', (req, res) => {
    res.render('add_request', {title: 'add request'});
});

//edit user route
router.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    Message.findById(id).exec()
        .then((message) => {
            if (message == null) {
                res.redirect('/');
            } else {
                res.render('edit', {
                    title: 'Edit Request',
                    message: message,
                })
            }
        })
        .catch((err) => {
            res.redirect('/');
        });
});

router.get('/login', (req, res) => {
    res.render('login', {title: 'Login'});
});

router.get('/dashboard', (req, res) => {
    Message.find().exec()
        .then((messages) => {
            res.render("dash", {
                title: "Dashboard",
                messages: messages,
            });
        })
        .catch((err) => {
            res.json({message: err.message});
        });
});


router.get('/view', (req, res) => {
    res.render('view', {title: 'View'});
});

module.exports = router;