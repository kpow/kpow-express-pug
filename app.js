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
// now we need to load our routes
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');
// tell the app to use these routes
app.use(mainRoutes);
// set the card routes base url for the route
app.use(['/project','/projects'], projectRoutes);

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
    res.render('error',res.locals);
});

// start the entire app
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});