// gotta have express ready
const express = require('express');
// create a new router to caprure the routes
const router = express.Router();
// load up our mock data
const  data  = require('../data.json');
// assign it to a var from deep in the object
const { projects } = data;

// capture the base route
router.get( '/', ( req, res ) => {
console.log('project')
});

// route capture project request with id
router.get('/:id', (req, res) => {
    // example of how to get a query string value
    const { projectID } = req.query;
    const projectData = projects[projectID]

    // line it all up in a object ready to eat.
    const templateData = { projectData };

    // lets render the template
    res.render('project', templateData);
});

// lets spit it all out so the main app can see it
module.exports = router;