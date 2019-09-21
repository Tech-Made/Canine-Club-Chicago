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

module.exports = router;
