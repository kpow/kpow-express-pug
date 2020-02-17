// all the routes that aren't cards
const express = require('express');
// get router to capture these request
const router = express.Router();

// base route
router.get('/', (req, res) => {
  console.log('hoiime');
  res.render("index");
});

// when you ge to the homepage
router.get('/about', (req, res) => {

});

module.exports = router;
