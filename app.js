const express = require('express');
const path = require('path');
// load our data
const data = require('./data.json');

// use standard node convention for our base express instance
const app = express();
//set templating up
app.set('view engine', 'pug');
// set up static assett server
app.use('/static', express.static('public'));
// add our data to response object so everyone can get to it.
app.use((req, res, next) => {
    res.locals = data.projects;
    next();
});

// base route for homre page, had it data in the locals
app.get('/', (req, res) => { 
    res.render('index', {"projects":res.locals});
});
  
// lets go to the about page
app.get('/about', (req, res) => {
    res.render('about')
});

app.get( '/', ( req, res ) => res.redirect('/') );

// route capture project request with id
app.get('/project/:id', (req, res, next) => {
    
    const { id } = req.params;
    let templateData = null
    //loop through project data and when we match an id from the data we render
    res.locals.forEach(project => {
        if(project.id === parseInt(id)) templateData = {"project":project}
    })

   templateData ? res.render('project', templateData) : next();

});

// to capture our 404 error
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
  
// and then lets get the status and render the template
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    console.log(`error = ${err.status}`)
    res.render('error',res.locals);

});

// start the entire app
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});