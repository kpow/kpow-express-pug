// all the routes that aren't cards
const express = require('express');
// get router to capture these request
const router = express.Router();
// load up our mock data
const  data  = require('../data.json');
// assign it to a var from deep in the object
const { projects } = data;


// base route
router.get('/', (req, res) => { 
  res.render('index', data);
  console.dir(data)
});

// when you ge to the homepage
router.get('/about', (req, res) => {
  res.render('about')
});

module.exports = router;
