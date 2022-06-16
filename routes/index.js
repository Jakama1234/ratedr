var express = require('express');
const { request } = require('../app');
var router = express.Router();
var fs = require('fs')
var nodemailer = require('nodemailer');
const req = require('express/lib/request');
const res = require('express/lib/response');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Express' });
});
/*router.post('/submit-form', function(req, res, next) {
  let senderName = req.body.senderName;
  let message = req.body.message;
  fs.appendFile('data.txt',`senderName: ${senderName}, message: ${message}\n`, function(e){
    if(e){
      console.log(e)
    }
  })
  res.render('hello', {senderName: senderName, message: message})
});*/
router.post('/submit', function(req, res, next) {
  let name = req.body.name;
  let email = req.body.email;
  let number = req.body.number;
/*  fs.appendFile('data.txt',`name: ${name}, email: ${email}, number: ${number} \n`, function(e){
    if(e){
      console.log(e)
    }
  })*/
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ratedr.rowan@gmail.com',
      pass: 'pa55word55'
    }
  })
  var mailOptions = {
    from: 'ratedr.rowan@gmail.com',
    to: req.body.e,
    subject: 'Successfully Tickets Booked',
    test: 'Congratulation you have successfully booked the ticket for the upcoming event.'
  }
  transporter.sendMail(mailOptions, function(error, info) {
    
    if (error) {
      console.log(error)
    } else {
      res.render('hello2', {name: name, email: email, number: number})
    }
  })
});
module.exports = router;