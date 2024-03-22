const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/hanoi', (req, res) => {
  res.render('Greenwich/Hanoi');
});

router.get('/hcm', (req, res) => {
  res.render('Greenwich/Hcm');
});

router.get('/danang', (req, res) => {
  res.render('Greenwich/Danang');
});

router.get('/cantho', (req, res) => {
  res.render('Greenwich/Cantho');
});

module.exports = router;