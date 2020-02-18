// all the routes that aren't cards
const express = require('express');
// get router to capture these request
const router = express.Router();

// base route for homre page, had it data in the locals
router.get('/', (req, res) => { 
  res.render('index', {"projects":res.locals});
});

// lets go to the about page
router.get('/about', (req, res) => {
  res.render('about')
});
// lets export it so can access it
module.exports = router;
