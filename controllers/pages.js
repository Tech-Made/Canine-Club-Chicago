const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/training', (req, res) => {
  res.render('services/training');
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

module.exports = router;
