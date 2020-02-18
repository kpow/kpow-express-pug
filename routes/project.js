// gotta have express ready
const express = require('express');
// create a new router to caprure the routes
const router = express.Router();

// capture the base route
router.get( '/', ( req, res ) => res.redirect('/') );

// route capture project request with id
router.get('/:id', (req, res) => {
    
    const { id } = req.params;
    let templateData = null
    //loop through project data and when we match an id from the data we render
    res.locals.forEach(project => {
        if(project.id === parseInt(id)) templateData = {"project":project}
    })

    if(templateData){
        res.render('project', templateData) 
    }else{
        const err = new Error('Not Found');
        err.status = 404;
        res.locals.error = err;
        res.status(err.status);
        res.render('error',res.locals);
    }
});

// lets spit it all out so the main app can see it
module.exports = router;