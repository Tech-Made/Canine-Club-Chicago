const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/facility', (req, res) => {
  res.render('about/facility');
});

router.get('/mission', (req, res) => {
  res.render('about/mission');
});

router.get('/team', (req, res) => {
  res.render('about/team');
});

router.get('/bootcamp', (req, res) => {
  res.render('services/bootcamp');
});

router.get('/aggressioncamp', (req, res) => {
  res.render('services/aggressioncamp');
});

router.get('/privatelesson', (req, res) => {
  res.render('services/privatelesson');
});

router.get('/privatelessonbundle', (req, res) => {
  res.render('services/privatelessonbundle');
});

router.get('/boarding', (req, res) => {
  res.render('boarding');
});

module.exports = router;
